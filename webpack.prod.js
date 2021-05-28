const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(
  {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
  },
  common,
);
