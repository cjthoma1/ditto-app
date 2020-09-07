module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    'react-native/no-inline-styles': 0
  },
  parserOptions: {
    project: './tsconfig.json'
  }
};
