const tseslint = require('typescript-eslint');
const eslintPluginAstro = require('eslint-plugin-astro');

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    ignores: ['dist/**', '.astro/**', '.yarn/**', 'public/**'],
  },
  {
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
