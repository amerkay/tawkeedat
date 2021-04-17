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
 ** Brand Color: orange-500, regent-st-blue-500, shakespeare-500, navy-500
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Extends the default Studio Meta Tailwind configuration here...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // to change or add fonts, see also nuxt.config.js -> webfontloader
      fontFamily: {
        sans: ['Changa', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          50: '#f4fbff',
          100: '#eaf8fe',
          200: '#caedfd',
          300: '#aae2fb',
          400: '#6bccf9',
          500: '#2bb6f6',
          600: '#27a4dd',
          700: '#2089b9',
          800: '#1a6d94',
          900: '#155979',
        },
        orange: {
          50: '#fff9f7',
          100: '#fff3ee',
          200: '#ffe1d6',
          300: '#ffcfbd',
          400: '#ffaa8b',
          500: '#FF8659',
          600: '#e67950',
          700: '#bf6543',
          800: '#995035',
          900: '#7d422c',
        },
        navy: {
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
  purge: [
    'components/**/*.vue',
    'content/**/*.md',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'utils/**/*.js',
    'nuxt.config.js',
    'formulate.config.js',
  ],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   // enabled: process.env.NODE_ENV === 'production',
  //   whitelistPatterns: [/^formulate/],
  //   // If you really want to remove all unused styles, use the mode: 'all'
  //   // option and be very careful to provide the paths to all files that might
  //   // reference any classes or HTML elements
  //   // See https://tailwindcss.com/docs/optimizing-for-production#purge-css-options
  //   // mode: 'all',
  //   // preserveHtmlElements: false,
  //   content: [
  //     'components/**/*.vue',
  //     'content/**/*.md',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'utils/**/*.js',
  //     'nuxt.config.js',
  //     'formulate.config.js',
  //   ],
  // },
}
