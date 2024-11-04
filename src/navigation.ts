import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "About Me",
      href: getPermalink("/about"),
    },
    {
      text: "Calendar",
      href: getPermalink("/calendar"),
    },
    {
      text: "Podcasts",
      href: getPermalink("/podcasts"),
    },
    {
      text: "Projects",
      href: getPermalink("/projects"),
    },
    {
      text: "Resume",
      href: getPermalink("/resume"),
    },
    {
      text: "Tools",
      href: getPermalink("/tools"),
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
    { text: "Contact", href: getPermalink("/contact") },
  ],
  socialLinks: [
    {
      ariaLabel: "X",
      icon: "tabler:brand-x",
      href: "https://x.com/aaditkamat",
    },
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://instagram.com/aadit_kamat",
    },
    {
      ariaLabel: "Facebook",
      icon: "tabler:brand-facebook",
      href: "https://facebook.com/AaditKam",
    },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/aaditkamat",
    },
  ],
  footNote: `
    Copyright © 2024 Aadit Kamat. Built with <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
