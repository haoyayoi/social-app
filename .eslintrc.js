module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native-a11y/ios',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'detox',
    'react',
    'lingui',
    'simple-import-sort',
  ],
  rules: {
    // Temporary until https://github.com/facebook/react-native/pull/43756 gets into a release.
    'prettier/prettier': 0,
    'react/no-unescaped-entities': 0,
    'react-native/no-inline-styles': 0,
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          // React/React Native priortized, followed by expo
          // Followed by all packages excluding unprefixed relative ones
          [
            '^(react\\/(.*)$)|^(react$)|^(react-native(.*)$)',
            '^(expo(.*)$)|^(expo$)',
            '^(?!(?:alf|components|lib|locale|logger|platform|screens|state|view)(?:$|\\/))@?\\w',
          ],
          // Relative imports.
          // Ideally, anything that starts with a dot or #
          // due to unprefixed relative imports being used, we whitelist the relative paths we use
          // (?:$|\\/) matches end of string or /
          [
            '^(?:#\\/)?(?:lib|state|logger|platform|locale)(?:$|\\/)',
            '^(?:#\\/)?view(?:$|\\/)',
            '^(?:#\\/)?screens(?:$|\\/)',
            '^(?:#\\/)?alf(?:$|\\/)',
            '^(?:#\\/)?components(?:$|\\/)',
            '^#\\/',
            '^\\.',
          ],
          // anything else - hopefully we don't have any of these
          ['^'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
  },
  ignorePatterns: [
    '**/__mocks__/*.ts',
    'src/platform/polyfills.ts',
    'src/third-party',
    'ios',
    'android',
    'coverage',
    '*.lock',
    '.husky',
    'patches',
    'bskyweb',
    '*.html',
    'bskyweb',
    'src/locale/locales/_build/',
    'src/locale/locales/**/*.js',
  ],
  settings: {
    componentWrapperFunctions: ['observer'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
