const { FlatConfig } = require('eslint');

const config = [
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      
    },
  },
];

module.exports = config;