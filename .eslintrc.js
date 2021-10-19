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
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
      }
   ],
   "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@lib', './lib'],
          ['@lib-shared', './lib/shared'],
          ['@config', './config'],
        ],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
};
