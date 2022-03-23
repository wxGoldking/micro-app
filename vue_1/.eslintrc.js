module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 0,
    'import/order': 0,
    'no-underscore-dangle': 0,
    'wrap-iife': 0,
    'camelcase': 0,
    'semi': 0,
    'indent': 0,
    'prefer-rest-params': 0
  },
};
