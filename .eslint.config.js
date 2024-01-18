import react from 'eslint-plugin-react';
import reacthooks from 'eslint-plugin-react-hooks';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      'eslint:recommended',
    ],
    plugins: {
      react,
      reacthooks,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
      },
    },
    rules: {
      'semi': 1,
    },
  }
]