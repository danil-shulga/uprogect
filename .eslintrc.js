module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'max-len': ['error', { ignoreComments: true }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      args: 'after-used',
      caughtErrors: 'all',
      destructuredArrayIgnorePattern: '^',
    }],
    'no-unused-vars': ['warn', {
      args: 'after-used',
      caughtErrors: 'all',
      destructuredArrayIgnorePattern: '^',
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'warn', {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
