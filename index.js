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
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'indent': [
      'error',
      'tab',
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
    'semi': [
      'error', 'always',
    ],
    'jsx-quotes': [
      2, 'prefer-single'
    ],
  },
}
