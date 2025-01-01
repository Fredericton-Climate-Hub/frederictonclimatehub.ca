import tailwindForms from "@tailwindcss/forms"
import type { Config } from 'tailwindcss'

export default {
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
    colors: {
      'white': '#ffffff',
      'blue-900': '#deeaed',
      'blue-700': '#9dc1c8',
      'blue-500': '#5c98a3',
      'metallic-800': '#c5cad3',
      'metallic-600': '#8b96a7',
      'metallic-400': '#586374',
      'green-900': '#d9f2c3',
      'green-700': '#b9dc89',
      'green-500': '#8ac53a',
      'green-300': '#537623',
      'green-100': '#1c270c',
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
    fontSize: {
      75: '0.75rem',
      100: '18px',
      125: '1.25rem',
      150: '1.5rem',
      200: '2rem',
      400: '4rem',
    },
    spacing: {
      25: '0.25rem',
      50: '0.5rem',
      75: '0.75rem',
      100: '1rem',
      125: '1.25rem',
      150: '1.5rem',
      175: '1.75rem',
      200: '2rem',
      225: '2.25rem',
      250: '2.5rem',
      300: '3rem',
      350: '3.5rem',
      400: '4rem',
      450: '4.5rem',
      500: '5rem',
    },
  },
  plugins: [
    tailwindForms,
  ],
} satisfies Config
