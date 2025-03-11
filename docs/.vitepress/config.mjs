import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'PRISM',
  description: 'Predictive Recommendations for Improved Screening in Medicine',
  appearance: 'dark',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Executive Summary', link: '01-executive-summary' },
        ]
      },
      {
        text: 'Conceptual Framework',
        items: [
          { text: 'Vision Mission', link: '02-vision-mission' },
          { text: 'Pattern Examples', link: '03-pattern-examples' },
          { text: 'Ethical Framework', link: '04-ethical-framework' },
          { text: 'Open Collaboration', link: '05-open-collaboration' },
        ]
      },
      {
        text: 'Technical Details',
        items: [          
          { text: 'System Architecture', link: '06-system-architecture' },
          { text: 'Technology Overview', link: '07-technology-overview' },
          { text: 'Training Methodology', link: '08-training-methodology' },
        ]
      },
      {
        text: 'Looking Forward',
        items: [
          { text: 'Future Directions', link: '09-future-directions' },
          { text: 'Deeper Motivations', link: '10-deeper-motivations' },
        ]
      },
      {
        text: 'Example Data',
        items: [
          { text: 'GOOD Exampe', link: '11-good-example' },
          { text: 'BAD Exampe', link: '12-bad-example' },
          { text: 'NOPE Exampe', link: '13-nope-example' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'huggingface', link: 'https://huggingface.co/prism-initiative' },
      { icon: 'github', link: 'https://github.com/prism-initiative' },
      { icon: 'twitter', link: 'https://twitter.com/brian_jorden' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/brianjorden' },
    ]
  },
  
  markdown: {
    lineNumbers: true
  }
});
