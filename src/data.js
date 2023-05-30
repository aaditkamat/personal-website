import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: getPermalink('/about'),
    },
    {
      text: 'Bookmarks',
      href: getPermalink('/bookmarks'),
    },
    {
      text: 'Calendar',
      href: getPermalink('/calendar'),
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
      text: 'Résumé',
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
