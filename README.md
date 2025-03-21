# PRISM Documentation Site

This repository contains the VitePress documentation site for the PRISM (Predictive Recommendations for Improved Screening in Medicine) initiative. The live site can be viewed at [https://prism-initiative.github.io](https://prism-initiative.github.io).

## Development

### Prerequisites
- Node.js v18 or higher
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build
```

### Project Structure
```
docs/
├── .vitepress/
│   └── config.js    # VitePress configuration
├── public/          # Static assets
├── index.md        # Home page
├── overview/       # Project overview
└── technical/      # Technical documentation
```

## License

MIT License
