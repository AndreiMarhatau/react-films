const path = require('path');

// your app's webpack.config.js
//const custom = require('../webpack.dev.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
