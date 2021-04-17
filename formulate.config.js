import { en } from '@braid/vue-formulate-i18n'

export default {
  plugins: [en],
  locale: 'en',
  rules: {
    // foobar: ({ value }) => ['foo', 'bar'].includes(value),
  },
  classes: {
    outer: '',
    input: (context, classes) => {
      switch (context.classification) {
        case 'button':
          return 'btn btn-primary'
        case 'textarea':
          return 'block w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        case 'text':
          return 'w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        default:
          return 'form-input w-full mb-1'
      }
    },
    label: 'font-medium text-sm sr-only',
    help: 'text-xs mb-1 text-gray-600',
    error: 'text-red-700 text-xs mt-2',
    //form-errors styled from main.scss
  },
}
