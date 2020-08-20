module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 1,
    'semi': [1, 'always'],
    'comma-dangle': 'off',
    'complexity': [1, 10],
    'max-statements': [1, 10],
    'max-depth': [1, 3],
    'max-len': [1, {
      'code': 100,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true
    }],
    'no-param-reassign': [1, { 'props': false }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': [1],
    'import/no-unresolved': [
      'error',
    ],
    'quote-props': 0,
    'brace-style': [1, 'stroustrup'],
    'vue/prop-name-casing': 0,
    'vue/script-indent': [2, 2, {
      'baseIndent': 1,
      'switchCase': 0,
      'ignores': []
    }],
    'import/no-extraneous-dependencies': [1, { 'devDependencies': true }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      },
    },
  ]
};
