# Aadit Kamat's Personal Website

This website is built using [ReactResume](https://github.com/tbakerx/react-resume-template) created and maintained by [Tim Baker](https://github.com/tbakerx)

## Configuration
All of the data for the site is driven via a file at /src/data/data.tsx. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the dataDef.ts file. Example images can be found at src/images/ and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports.

## Installation
```bash
yarn
```

## Local Development
```bash
yarn dev
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build
```bash
yarn build
```
This command generates static content into the `build` directory and can be served using any static content hosting service (I've used Vercel).

## Acknowledgements
Initially created by [Tim Baker](https://github.com/tbakerx) and maintained by a community of contributors.

## License
This website is licensed under the MIT license — see the LICENSE file for details.
