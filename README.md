# Tawkeedat MVP

## Tech Stack & Handy Links

### Frontend tech stack:

#### Javascript

We use Nuxt.js, which is a Vue.js framework with extra awesomeness for [static site generation](https://nuxtjs.org/docs/2.x/concepts/static-site-generation/).

- [Vue.js Documentation](https://vuejs.org/v2/guide/). We use Vue.js to code components and pages.
- [Nuxt.js Documentation](https://nuxtjs.org/docs/2.x/concepts/views). We use Nuxt.js as our framework. It connects all the pieces through [PostCSS](https://postcss.org/) and [Webpack](https://webpack.js.org/).

#### Tailwind CSS and ready-made Tailwind UI components

We use standard CSS. Easy to move to SCSS (Sass CSS).

- [Tailwind CSS Documentation](https://tailwindcss.com/docs). Tailwind is a powerful class generator that helps design in HTML and Vue.js templates without writing CSS. The result is passed through [PurgeCSS](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html) with the result being only the CSS classes used = tiny CSS file size.
- [Tailwind UI copy/paste UI components](https://tailwindui.com/components).

### Backend “serverless” functions on Netlify

We need server-side endpoints to make use of the internet speed of 1Gbps we got on the server-side, rather than clients 3G connection.

With [Netlify Serverless](https://docs.netlify.com/), we don't need to worry about a backend server. They deploy scalable endpoints out of the box!

It uses Node.js functions found in [`/netlify/functions`](./netlify/)

[→ Serverless tutorial](https://www.sitepoint.com/serverless-functions/)

## How to install

```bash
git clone git@github.com:amerkawar/tawkeedat.git

# install dependencies
cd tawkeedat && npm install

# make sure netlify-cli is installed globally
npm install netlify-cli -g

# login to netlify
netlify login

# init netlify in this directory
netlify init
```

## How to use with `netlify-cli`

```bash
# To run netlify in developement mode
netlify dev

# To build & deploy
netlify build && netlify deploy --prod
```

## To Run Nuxt alone (without Netlify)

```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
