module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  ignorePatterns: ['webpack.config.ts'],
  plugins: ['@typescript-eslint', 'react', 'i18next', 'react-hooks'],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['draft', 'acc', 'accumulator'],
      ignorePropertyModificationsForRegex: ['^mutable'],
    }],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'react/jsx-props-no-spreading': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/extensions': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
    }],
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
    }],
    'react/function-component-definition': ['error', {
      namedComponents: ['arrow-function'],
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['*saga*.ts', '*saga*.js', '*Saga*.ts'],
      rules: {
        'no-restricted-syntax': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        'no-use-before-define': ['off'],
      },
    },
    {
      files: [
        'set.ts',
        'get.ts',
        'deepMerge.ts',
        'cloneObject.ts',
        'isPlainObject.ts',
      ],
      rules: {
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-nested-ternary': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'no-prototype-builtins': 'off',
      },
    },
  ],
};
