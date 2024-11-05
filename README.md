# Aadit's Personal Website

![Lighthouse Report](./Lighthouse%20scores.png)
[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![Astro](https://img.shields.io/badge/built%20with-astro-000000.svg?style=flat-square&color=000000&labelColor=000000&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/built%20with-tailwind%20css-38b2ac.svg?style=flat-square&color=38b2ac&labelColor=38b2ac&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Netlify Status](https://github.com/nwtgck/actions-netlify/workflows/build-test/badge.svg)](https://app.netlify.com/sites/fastidious-donut-484954/deploys)


This website is built using [Astro Wind](https://github.com/onwidget/astrowind), an open-source template using **[Astro 2.0](https://astro.build/blog/astro-2/) + [Tailwind CSS](https://tailwindcss.com/)**.

### Project structure

Inside AstroWind template, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │       └── base.css
│   ├── components/
│   │   ├── CustomStyles.astro
│   │   └── Logo.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   └── ...
│   ├── utils/
│   ├── config.mjs
│   └── data.js
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
const CONFIG = {
  name: 'Example',

  origin: 'https://example.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages, for example
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  title: 'Example - This is the homepage title of Example', // Default seo title
  description: 'This is the homepage description of Example', // Default seo description
  defaultImage: 'image.jpg', // Default seo image

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en', // Default language
  textDirection: 'ltr', // Default html text direction

  dateFormatter: new Intl.DateTimeFormat('en', {
    // Date format
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // Or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // Or some value,

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};
```

## Installation

```console
npm install
```

## Local Development

```console
npm run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

This website is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
