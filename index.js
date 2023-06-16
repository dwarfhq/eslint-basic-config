module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'quotes': [
      'error',
      'single',
    ],
    'no-console': [
      'warn',
      {
        'allow': [
          'warn',
          'error',
        ],
      },
    ],
    'comma-dangle': [
      'error', 'always-multiline',
    ],
    'jsx-quotes': [
      2, 'prefer-single'
    ],
  },
}
