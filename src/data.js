import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: getPermalink('/about'),
    },
    {
      text: 'Calendar',
      href: getPermalink('/calendar'),
    },
    {
      text: 'Music',
      href: getPermalink('/music'),
    },
    {
      text: 'Podcasts',
      href: getPermalink('/podcasts'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Tools',
      href: getPermalink('/tools'),
    },
  ],
  socialLinks: [
    {
      href: 'https://github.com/aaditkamat',
      position: 'right',
      className: 'fab fa-github fa-lg',
      label: 'GitHub repository',
    },
    {
      href: 'https://twitter.com/aaditkamat',
      position: 'right',
      className: 'fab fa-twitter fa-lg',
      label: 'Twitter page',
    },
    {
      href: 'https://www.instagram.com/aadit_kamat',
      position: 'right',
      className: 'fab fa-instagram fa-lg',
      label: 'Instagram page',
    },
  ],
};

export const footerData = {
  links: [],
  socialLinks: [],
  secondaryLinks: [],
};

export const projectsData = [
  {
    link: "https://github.com/aaditkamat/plan-it-right",
    title: "Plan It Right",
    info: ["A web application that generates trip itineraries of upto 5 days.", "Tech stack: Node.js, Express, jQuery"]
  },
  {
    link: "https://github.com/aaditkamat/bollywood-hangman",
    title: "Bollywood Hangman",
    info: ["The Bollywood version of the awesome &lt;a href=\"https://hollywoodhangman.com/\"&gt; Hollywood Hangman &lt;\\a&gt;", "Tech Stack: React, Python"]
  },
  {
    link: "https://github.com/Remus-Hack-n-Roll-2019/job-matcher",
    title: "Job Matcher",
    info: ["A web application that matches your professional profile to online job listings and recommends the top matching jobs", "Tech Stack: React and Flask"]
  },
  {
    link: "https://github.com/pay-n/test-protect",
    title: "Test Protect",
    info: ["A web application that monitors websites like Chegg real-time for plagiarism", "Tech Stack: Node.js, Express and React"]
  },
]