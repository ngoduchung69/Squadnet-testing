// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  extends: [
    "@rushstack/eslint-config/profile/node",
  ],
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    'require-atomic-updates': 'off',
  },
};
