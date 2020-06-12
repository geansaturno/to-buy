const vueWebpackConfig = require('@vue/cli-service/webpack.config')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: config => {
    config.resolve.alias['@'] = vueWebpackConfig.resolve.alias['@']
    return config
  }
};
