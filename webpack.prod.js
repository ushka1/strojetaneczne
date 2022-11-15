const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(
  {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [new BundleAnalyzerPlugin()],
  },
  common,
);
