/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Get shades by entering brand color: https://tailwind.ink/
 **
 ** Palette https://coolors.co/073763-f57f20-d5f4cd-523f38-fdee50
 **
 ** Brand Color: steel-900, mango-500, limegreen-300
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Extends the default Studio Meta Tailwind configuration here...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // to change or add fonts, see also nuxt.config.js -> webfontloader
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // Docs https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // Docs https://github.com/tailwindlabs/tailwindcss-typography
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/^formulate/],
    // If you really want to remove all unused styles, use the mode: 'all'
    // option and be very careful to provide the paths to all files that might
    // reference any classes or HTML elements
    mode: 'all',
    content: [
      'components/**/*.vue',
      'content/**/*.md',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'utils/**/*.js',
      'nuxt.config.js',
      'formulate.config.js',
    ],
  },
}
