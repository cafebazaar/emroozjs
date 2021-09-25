module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@lib', './lib'],
        ],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
};