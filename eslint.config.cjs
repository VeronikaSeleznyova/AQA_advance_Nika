// import globals from 'globals';
// import pluginJs from '@eslint/js';

// export default {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   rules: {
  
//   },
// };

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