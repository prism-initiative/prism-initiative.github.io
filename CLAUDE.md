# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official documentation website for the PRISM (Predictive Recommendations for Improved Screening in Medicine) initiative. PRISM is an AI-powered healthcare pattern recognition system that analyzes insurance claims data to identify beneficial screening opportunities for early disease detection.

The site is built with VitePress and deployed to GitHub Pages at https://prisminitiative.ai (also accessible via https://prism-initiative.github.io).

## Common Commands

### Development
```bash
# Start development server (runs on http://localhost:5173 by default)
npm run docs:dev

# Alternative: use the convenience script
./dev.sh
```

### Build & Preview
```bash
# Build for production
npm run docs:build

# Preview production build locally
npm run docs:preview
```

### Installation
```bash
# Install dependencies
npm install
```

### Table of Contents Generation
```bash
# Rebuild the table of contents (docs/03-table-of-contents.md)
./build-toc.sh
```

The `build-toc.sh` script automatically scans all markdown files in `docs/` and generates a comprehensive table of contents with direct links to every heading and section across all documentation. Run this script whenever you add new documentation files or modify headings to keep the table of contents up to date.

## Project Structure

```
docs/
├── .vitepress/
│   ├── config.mjs        # VitePress configuration, theme, nav, sidebar
│   └── cache/            # Auto-generated, do not edit
├── index.md              # Homepage
├── 00-contact-and-project-information.md
├── 01-executive-summary.md
├── 02-document-summaries.md
├── 03-table-of-contents.md
├── 10-19-*.md            # Foundation & Data Architecture section
├── 20-29-*.md            # AI Architecture & Philosophy section
├── 30-39-*.md            # Examples & Demonstrations section
├── 40-49-*.md            # Implementation & Operations section
├── 50-59-*.md            # Infrastructure & Processing section
├── 60-69-*.md            # Collaboration & Growth section
├── 70-79-*.md            # Organization & Research section
├── 85-88-*.md            # Technical Deep Dives section
└── 99-*.md               # References & Resources section
```

## Architecture & Key Concepts

### Documentation Organization
The documentation uses a numbered prefix system (00-99) to organize content into thematic sections:
- **00-09**: Introduction & Overview
- **10-19**: Foundation & Data Architecture
- **20-29**: AI Architecture & Philosophy
- **30-39**: Examples & Demonstrations
- **40-49**: Implementation & Operations
- **50-59**: Infrastructure & Processing
- **60-69**: Collaboration & Growth
- **70-79**: Organization & Research
- **85-88**: Technical Deep Dives
- **99**: References & Resources

This numbering system provides clear ordering and makes it easy to identify which section a document belongs to.

### VitePress Configuration
The site configuration lives in `docs/.vitepress/config.mjs`. This file controls:
- Site metadata (title, description)
- Theme configuration (appearance: 'dark')
- Navigation bar (top nav)
- Sidebar structure (mirrors the numbered document organization)
- Markdown settings (line numbers enabled)
- Social links (HuggingFace, GitHub, Twitter, LinkedIn)

**Important**: The sidebar structure in `config.mjs` must be kept in sync with the actual documentation files. When adding new documentation files, update the appropriate section in the sidebar array.

### Content Guidelines
The PRISM documentation has a specific voice and structure:
- Technical but accessible explanations of complex medical AI concepts
- Focus on the "why" behind architectural decisions
- Emphasis on patient benefit, privacy-by-design, and ethical safeguards
- Cross-references between related documents (see the `---` separator and links at the end of many docs)
- Uses markdown tables, code blocks, and structured headings for clarity

### Build Process
VitePress builds the static site from markdown files:
1. Reads all `.md` files from `docs/`
2. Uses `config.mjs` to generate navigation and theme
3. Outputs static HTML/CSS/JS to `docs/.vitepress/dist/`
4. GitHub Actions workflow (`.github/workflows/deploy.yml`) handles deployment to GitHub Pages

## GitHub Pages Deployment

The site automatically deploys to GitHub Pages on every push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`):
- Runs on: pushes to `main` or manual workflow dispatch
- Uses Node.js 20 with npm caching
- Builds with `npm run docs:build`
- Uploads artifact from `docs/.vitepress/dist`
- Deploys to GitHub Pages environment

**Note**: The deployment requires GitHub Pages to be enabled in the repository settings with source set to "GitHub Actions".

## Working with Documentation

### Adding New Documentation Pages
1. Create the markdown file in `docs/` with appropriate numbered prefix (e.g., `42-new-topic.md`)
2. Add frontmatter if needed (VitePress supports YAML frontmatter)
3. Update `docs/.vitepress/config.mjs` to add the page to the appropriate sidebar section
4. Run `./build-toc.sh` to regenerate the table of contents with the new page
5. Ensure cross-references to/from related documents are added at the end of the page
6. Test locally with `npm run docs:dev`

### Editing Existing Pages
- Markdown files can be edited directly
- VitePress dev server has hot-reload enabled
- Pay attention to the internal link structure (format: `/page-name` without `.md` extension)
- Maintain the consistent cross-referencing pattern at the end of documents
- If you add, remove, or modify headings, run `./build-toc.sh` to update the table of contents

### Sidebar Configuration
The sidebar in `config.mjs` is organized hierarchically:
```javascript
sidebar: [
  {
    text: 'Section Name',
    collapsed: true, // or false for default expanded
    items: [
      { text: 'Page Title', link: '/page-name' }
    ]
  }
]
```

### Clean URLs
The site uses `cleanUrls: true` in the config, meaning:
- Links should be written as `/page-name` not `/page-name.html` or `/page-name.md`
- VitePress automatically handles URL cleanup
- Local dev server and production build both support this

## Content Domain Knowledge

This documentation covers a sophisticated healthcare AI system with specific architectural principles:

1. **Pure Sequence Completion**: Models are deliberately simplified to only continue medical billing sequences, not chat or reason
2. **Ensemble Architecture**: 100 independent models trained on separate patient populations provide consensus-based recommendations
3. **Privacy by Architecture**: Uses truly anonymous data (not de-identified), processed as cryptographic hashes
4. **Constructive-Only**: System can only suggest additional screening, never deny care
5. **Three-Pattern Learning**: Training uses GOOD (early detection), BAD (late diagnosis), and NOPE (alternative diagnosis) examples
6. **PRISM Data Format**: Eight-field structure (POOL, PATIENT, ASL, WHO, WHAT, WHEN, WHERE, WHY) formatted as markdown tables

When editing documentation, maintain consistency with these core concepts and the technical vocabulary established throughout the docs.

## Troubleshooting

### Dev server won't start
- Ensure Node.js v18+ is installed
- Delete `node_modules/` and run `npm install` again
- Check for port conflicts (VitePress uses port 5173 by default)

### Build fails
- Check for broken internal links (VitePress will warn about these)
- Ensure all files referenced in `config.mjs` sidebar actually exist
- Verify markdown syntax is valid

### Changes not appearing
- VitePress dev server should auto-reload; try hard refresh (Ctrl+Shift+R)
- For production builds, ensure you're running `npm run docs:build` after changes
- GitHub Pages deployment may take a few minutes after push
