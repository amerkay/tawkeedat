/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Get shades by entering brand color: https://javisperez.github.io/tailwindcolorshades/
 **
 ** Palette https://coolors.co/1b4965-5fa8d3-b0e0f1-ffffff-ffb703
 **
 ** Brand Color: selective-yellow-500, regent-st-blue-500, shakespeare-500, teal-blue-500
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
      colors: {
        'selective-yellow': {
          50: '#fffbf2',
          100: '#fff8e6',
          200: '#ffedc0',
          300: '#ffe29a',
          400: '#ffcd4f',
          500: '#FFB703',
          600: '#e6a503',
          700: '#bf8902',
          800: '#996e02',
          900: '#7d5a01',
        },
        'regent-st-blue': {
          50: '#fbfdfe',
          100: '#f7fcfe',
          200: '#ebf7fc',
          300: '#dff3f9',
          400: '#c8e9f5',
          500: '#B0E0F1',
          600: '#9ecad9',
          700: '#84a8b5',
          800: '#6a8691',
          900: '#566e76',
        },
        shakespeare: {
          50: '#f7fbfd',
          100: '#eff6fb',
          200: '#d7e9f4',
          300: '#bfdced',
          400: '#8fc2e0',
          500: '#5FA8D3',
          600: '#5697be',
          700: '#477e9e',
          800: '#39657f',
          900: '#2f5267',
        },
        'teal-blue': {
          50: '#f4f6f7',
          100: '#e8edf0',
          200: '#c6d2d9',
          300: '#a4b6c1',
          400: '#5f8093',
          500: '#1b4965',
          600: '#18425b',
          700: '#14374c',
          800: '#102c3d',
          900: '#0d2431',
        },
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
