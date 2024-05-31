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
    "consulting": [
      {
        link: 'https://www.science.org/doi/full/10.1126/science.add7150?casa_token=lngchMBZQ2oAAAAA%3AMiX-hHddparHoLFBXhszlQu4YdhiKR9XoqpFa85i6-sZmcDfvJCqDkcfFGwGe79X-89pTHNj6oPZ',
        title: 'BlueShield Consulting',
        info: 'Conducted market analysis and competitive overview to help BlueShield - a Gainesville based Therapeutics startup - to understand the market for its novel immunotherapy based treatment for Depression',
      },
      {
        link: 'https://drive.google.com/file/d/1zJM82f6M7A8rShkrquBknE-lE_LhSCpx/view?usp=drive_link',
        title: 'WeCareJax Connect Technology Consulting',
        info: 'Led the automation for the process of collecting feedback data from surveys sent to patients post-visit using Jotform'
      },
      {
        link: 'https://www.credential.net/90df5825-c490-4df8-b358-0011c5c194be',
        title: 'Happy Sneeze Market Research Externship',
        info: 'Performing market analysis and competitor overview as well as identifying potential partners for outreach'

      }
    ],
    "analytics": [
      {
        link: 'https://github.com/aaditkamat/QMB6945-RMS-Project',
        title: 'Comparing Benchmarking Measures for Financial Data',
        info: 'Performed EDA on 6000+ records to establish relationships between different key metrics such as\
        and leveraged Data Envelopment Analysis (DEA) algorithm to benchmark efficiency based on costs and sales, enabling\
        stakeholders to identify underperforming restaurants',
      },
      {
        link: 'https://xiaofan-lab.github.io/',
        title: 'Analyzing genetic variants',
        info: 'Studying association between variant pathogenicity and protein properties using regression techniques under Dr.Xiao',
      },
      {
        link: 'https://drive.google.com/file/d/1geGWhkjG4fEpDRwFMtRXJKDsECnptJxj/view?usp=sharing',
        title: 'Impact of Advertising Budget on Product Sales',
        info: 'Used regression modelling to predict the impact of advertising budgets and user engagement with\
        social media platforms on product sales'
      }
    ],
    "software-development": [
      {
        link: 'https://github.com/aaditkamat/plan-it-right',
        title: 'Plan It Right',
        description: 'A web application that generates trip itineraries of up to 5 days.',
        techStack: 'Tech stack: Node.js, Express, jQuery'
      },
      {
        link: 'https://github.com/aaditkamat/bollywood-hangman',
        title: 'Bollywood Hangman',
        description: 'The Bollywood version of the awesome Hollywood Hangman',
        techStack: 'Tech Stack: React, Python'
      },
      {
        link: 'https://github.com/Remus-Hack-n-Roll-2019/job-matcher',
        title: 'Job Matcher',
        description: 'A web application that matches your professional profile to online job listings and recommends the top matching jobs',
        techStack: 'Tech Stack: React and Flask'
      },
      {
        link: 'https://github.com/pay-n/test-protect',
        title: 'Test Protect',
        description: 'A web application that monitors websites like Chegg real-time for plagiarism',
        techStack: 'Tech Stack: Node.js, Express and React'
      },
    ]
  }
];

export const podcastData = [
  {
    altText: 'WorkLife with Adam Grant',
    url: 'https://open.spotify.com/embed/show/4eylg9GZJOVvUhTynt4jjA?utm_source=generator',
  },
  {
    altText: 'Deep Questions With Cal Newport',
    url: 'https://open.spotify.com/embed/show/0e9lFr3AdJByoBpM6tAbxD?utm_source=generator',
  },
  {
    altText: 'No Stupid Questions',
    url: 'https://open.spotify.com/embed/show/6Z49m4VQ4TfQ28Cnl42yiT?utm_source=generator',
  },
  {
    altText: 'The Ranveer Show',
    url: 'https://open.spotify.com/embed/show/6ZcvVBPQ2ToLXEWVbaw59P?utm_source=generator',
  },
  {
    altText: 'Being Well with Dr Rick Hanson and Forrest Hanson',
    url: 'https://open.spotify.com/embed/show/5d87ZU1XY0fpdYNSEwXLVQ?utm_source=generator',
  },
  {
    altText: "Skeptic's Path to Enlightenment",
    url: 'https://open.spotify.com/embed/show/2LZPT1To5ziuPPbEVDtVhZ?utm_source=generator',
  },
];
