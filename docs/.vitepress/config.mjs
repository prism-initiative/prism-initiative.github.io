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
          { text: 'Project Summary', link: '/01-project-summary' },
          { text: 'Project Overview', link: '/02-project-overview' },
          { text: 'The Five Ws', link: '/03-the-five-ws' },
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'Ensemble Architecture', link: '/04-ensemble-architecture' },
          { text: 'Foundational Concepts', link: '/05-foundational-concepts' },
          { text: 'Mathematical Patterns', link: '/06-mathematical-patterns' },
          { text: 'Reinforcement Learning', link: '/07-reinforcement-learning' },
        ]
      },
      {
        text: 'Ethics and Collaboration',
        items: [
          { text: 'Ethics and Safeguards', link: '/08-ethics-and-safeguards' },
          { text: 'Open Collaboration', link: '/09-open-collaboration' },
        ]
      },
      {
        text: 'Examples and Use Cases',
        items: [
          { text: 'History Data Format', link: '/10-history-data-format' },
          { text: 'Hypothetical Narratives', link: '/11-hypothetical-narratives' },
          { text: 'Call for Conditions', link: '/12-call-for-conditions' },
          { text: 'Example Conditions', link: '/13-example-conditions' },
          { text: 'Different Perspectives', link: '/14-different-perspectives' },
          { text: 'Key Challenges', link: '/15-key-challenges' },
        ]
      },
      {
        text: 'Early Experiments',
        items: [
          { text: 'Detailed Example', link: '/16-detailed-example' },
          { text: 'Experiment Results', link: '/17-experiment-results' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/prism-initiative/prism-initiative.github.io' },
      { icon: 'twitter', link: 'https://twitter.com/brian_jorden' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/brianjorden' },
    ]
  },
  
  markdown: {
    lineNumbers: true
  }
});
