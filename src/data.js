import { getPermalink } from '~/utils/permalinks';

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
      text: 'Resume',
      href: getPermalink('/resume'),
    },
    {
      text: 'Tools',
      href: getPermalink('/tools'),
    },
  ],
  socialLinks: [
    {
      href: 'https://github.com/aaditkamat',
      className: 'fab fa-github fa-lg',
      label: 'GitHub repository',
    },
    {
      href: 'https://twitter.com/aaditkamat',
      className: 'fab fa-x-twitter fa-lg',
      label: 'Twitter page',
    },
    {
      href: 'https://www.instagram.com/aadit_kamat',
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
    link: 'https://github.com/aaditkamat/plan-it-right',
    title: 'Plan It Right',
    info: ['A web application that generates trip itineraries of up to 5 days.', 'Tech stack: Node.js, Express, jQuery'],
  },
  {
    link: 'https://github.com/aaditkamat/bollywood-hangman',
    title: 'Bollywood Hangman',
    info: ['The Bollywood version of the awesome Hollywood Hangman', 'Tech Stack: React, Python'],
  },
  {
    link: 'https://github.com/Remus-Hack-n-Roll-2019/job-matcher',
    title: 'Job Matcher',
    info: [
      'A web application that matches your professional profile to online job listings and recommends the top matching jobs',
      'Tech Stack: React and Flask',
    ],
  },
  {
    link: 'https://github.com/pay-n/test-protect',
    title: 'Test Protect',
    info: [
      'A web application that monitors websites like Chegg real-time for plagiarism',
      'Tech Stack: Node.js, Express and React',
    ],
  },
];

export const podcastData = [
  {
    src: 'https://open.spotify.com/embed/show/4eylg9GZJOVvUhTynt4jjA?utm_source=generator',
  },
  {
    altText: 'Deep Questions With Cal Newport',
    src: 'https://open.spotify.com/embed/show/0e9lFr3AdJByoBpM6tAbxD?utm_source=generator',
  },
  {
    altText: 'No Stupid Questions',
    src: 'https://open.spotify.com/embed/show/6Z49m4VQ4TfQ28Cnl42yiT?utm_source=generator',
  },
  {
    altText: 'The Ranveer Show',
    src: 'https://open.spotify.com/embed/show/6ZcvVBPQ2ToLXEWVbaw59P?utm_source=generator',
  },
  {
    altText: 'Being Well with Dr Rick Hanson and Forrest Hanson',
    src: 'https://open.spotify.com/embed/show/5d87ZU1XY0fpdYNSEwXLVQ?utm_source=generator',
  },
  {
    altText: "Skeptic's Path to Enlightenment",
    src: 'https://open.spotify.com/embed/show/2LZPT1To5ziuPPbEVDtVhZ?utm_source=generator',
  },
];
