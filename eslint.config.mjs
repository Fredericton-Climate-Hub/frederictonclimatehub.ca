// @ts-check
import tailwindcss from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .append({
    ignores: [`**/*.js`],
  })
  .append(tailwindcss.configs[`flat/recommended`])
  .override(`nuxt/vue/rules`, {
    rules: {
      'vue/no-multiple-template-root': `off`,
    },
    files: [
      'layouts/**/*.{js,ts,jsx,tsx,vue}',
      'pages/**/*.{js,ts,jsx,tsx,vue}',
    ],
  })
  .override(`nuxt/vue/single-root`, {
    rules: {
      'vue/no-multiple-template-root': `off`,
    },
    files: [
      'layouts/**/*.{js,ts,jsx,tsx,vue}',
      'pages/**/*.{js,ts,jsx,tsx,vue}',
    ],
  })
  .override(`nuxt/typescript/rules`, {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        `warn`,
        {
          args: `none`,
        },
      ],
    },
  })
  .override(`nuxt/stylistic`, {
    rules: {
      '@stylistic/brace-style': [`warn`, `1tbs`, { allowSingleLine: true }],
    },
  })
