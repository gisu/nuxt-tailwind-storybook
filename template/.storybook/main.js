// .storybook/main.js
module.exports = {
  stories: ['../components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-docs/register',
    '@storybook/addon-docs',
    '@storybook/addon-actions'
  ],
};
