import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PRISM',
  description: 'Predictive Recommendations for Improved Screening in Medicine',
  appearance: 'dark',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Executive Summary', link: '/01-executive-summary' },
      { text: 'Table of Contents', link: '/03-table-of-contents' },
    ],

    sidebar: [
      {
        text: 'Introduction & Overview',
        collapsed: false,
        items: [
          { text: 'Home', link: '/' },
          { text: 'Contact & Project Information', link: '/00-contact-and-project-information' },
          { text: 'Executive Summary', link: '/01-executive-summary' },
          { text: 'Document Summaries', link: '/02-document-summaries' },
          { text: 'Table of Contents', link: '/03-table-of-contents' },
        ]
      },
      {
        text: 'Foundation & Data Architecture',
        collapsed: false,
        items: [
          { text: 'PRISM Data Format', link: '/10-prism-data-format' },
          { text: 'Completely Anonymous Data Only', link: '/11-completely-anonymous-data' },
          { text: 'Insurance Company Unique Vantage Point', link: '/12-insurance-vantage-point' },
          { text: 'Standardized and Finite Codesets', link: '/13-standardized-codesets' },
          { text: 'Three-Pattern Learning', link: '/14-three-pattern-learning' },
        ]
      },
      {
        text: 'AI Architecture & Philosophy',
        collapsed: false,
        items: [
          { text: 'Pure Sequence Completion', link: '/20-pure-sequence-completion' },
          { text: 'Ensemble of 100 Specialized Models', link: '/21-ensemble-models' },
          { text: 'Perfect Retrospective-Prospective Equivalence', link: '/22-retrospective-prospective' },
          { text: '"All Models are Wrong" Philosophy', link: '/23-all-models-wrong' },
          { text: 'Constructive-Only Architecture', link: '/24-constructive-only' },
        ]
      },
      {
        text: 'Examples & Demonstrations',
        collapsed: false,
        items: [
          { text: 'Synthetic Case Examples', link: '/30-synthetic-cases' },
          { text: 'GOOD Example - Early Detection', link: '/31-good-example' },
          { text: 'BAD Example - Delayed Diagnosis', link: '/32-bad-example' },
          { text: 'NOPE Example - Alternative Diagnosis', link: '/33-nope-example' },
          { text: 'Sequence Generation Demonstration', link: '/34-generation-demonstration' },
          { text: 'Audio & Video Resources', link: '/35-audio-video-resources' },
        ]
      },
      {
        text: 'Implementation & Operations',
        collapsed: false,
        items: [
          { text: 'Consensus Voting Mechanism', link: '/40-consensus-voting' },
          { text: 'Clinical Decision Support Positioning', link: '/41-clinical-decision-support' },
          { text: 'Self-Aligning Incentive Structure', link: '/42-incentive-structure' },
          { text: 'Platform Potential with Constraints', link: '/43-platform-potential' },
          { text: 'Healthcare Utilization Phenotype Recognition', link: '/44-phenotype-recognition' },
          { text: 'Zero Integration Burden', link: '/45-zero-integration' },
        ]
      },
      {
        text: 'Infrastructure & Processing',
        collapsed: false,
        items: [
          { text: 'Cluster Architecture Approach', link: '/50-cluster-architecture' },
          { text: 'Continuous Model Retraining', link: '/51-continuous-retraining' },
          { text: 'Continuous Batch Inference Process', link: '/52-batch-inference' },
        ]
      },
      {
        text: 'Collaboration & Growth',
        collapsed: false,
        items: [
          { text: 'Open Collaboration with Privacy Protection', link: '/60-open-collaboration' },
        ]
      },
      {
        text: 'Organization & Research',
        collapsed: false,
        items: [
          { text: 'Large and Rich Dataset', link: '/70-large-dataset' },
          { text: 'PBC Structure and Team', link: '/71-pbc-team' },
          { text: 'Research and Publication', link: '/72-research-publication' },
        ]
      },
      {
        text: 'Technical Deep Dives',
        collapsed: false,
        items: [
          { text: 'Vector Representations & Mathematics', link: '/85-vector-representations' },
          { text: 'Technology Stack & Libraries', link: '/86-technology-stack' },
          { text: 'Processing Pipeline Specifications', link: '/87-processing-pipeline' },
          { text: 'Reference Architecture & Standards', link: '/88-reference-architecture' },
        ]
      },
      {
        text: 'References & Resources',
        collapsed: false,
        items: [
          { text: 'Glossary of Terms', link: '/99-glossary-of-terms' },
        ]
      }
    ],

    outline: {
      level: 'deep'
    },

    socialLinks: [
      { icon: 'huggingface', link: 'https://huggingface.co/prism-initiative' },
      { icon: 'github', link: 'https://github.com/prism-initiative' },
      { icon: 'twitter', link: 'https://twitter.com/brian_jorden' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/brianjorden' },
    ]
  },

  markdown: {
    lineNumbers: true
  },

});
