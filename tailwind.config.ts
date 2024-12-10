import tailwindForms from '@tailwindcss/forms'
import type { Config } from 'tailwindcss'

export default {
  content: [
    'pages/**/*.vue',
    'components/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindForms,
  ],
} satisfies Config
