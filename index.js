module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off',
    'indent': [
      'warn',
      2,
    ],
    'quotes': [
      'warn',
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
  },
}