import tailwindForms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'

export default {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue-900': '#deeaed',
      'blue-700': '#9dc1c8',
      'blue-500': '#5c98a3',
      'metallic-800': '#c5cad3',
      'metallic-600': '#8b96a7',
      'metallic-400': '#586374',
      'green-700': '#b9dc89',
      'green-500': '#8ac53a',
      'green-300': '#537623',
      'yellow-800': '#ffe699',
      'yellow-700': '#ffda66',
      'yellow-600': '#ffce33',
      'orange-900': '#ffdfcc',
      'orange-700': '#ffa066',
      'orange-500': '#ff6100',
      'red-500': '#fa2605',
      'red-400': '#c81e04',
      'red-300': '#961703',
      'black': '#000000',
    },
  },
  plugins: [
    tailwindForms,
  ],
} satisfies Config
