module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    indent: ['error', 2],
    semi: 'error',
    quotes: ['error', 'single'],
    eqeqeq: 'error',
    'default-case': 'error',
    'array-bracket-spacing': 'warn',
    camelcase: 'warn',
    'comma-spacing': 'warn',
    'key-spacing': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'space-before-function-paren': ['error', 'never'],
    'spaced-comment': 'warn',
    'prefer-const': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'warn',
    'space-infix-ops': 'warn',
    'no-multi-spaces': 'warn',
    'space-before-blocks': 'warn',
    'semi-spacing': ['error', { before: false, after: true }]
  }
}
