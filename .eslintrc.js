module.exports = {
  extends: 'airbnb-base',
  env: {
    es6: true,
    browser: false,
    mocha: true,
  },
  globals: {
    __base: true,
  },
  rules: {
    'no-console': 1,
    'max-len': [0, 100, 2, { ignoreComments: true }],
    'arrow-body-style': 0,
    'prefer-destructuring': 0,
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-newline': 0,
    'comma-dandle': ['only-multiline'],
  },
};
