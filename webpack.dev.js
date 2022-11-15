const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(
  {
    mode: 'development',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      watchContentBase: true,
      port: 3000,
      clientLogLevel: 'silent',
      historyApiFallback: true,
      hot: true,
      overlay: true,
      stats: 'errors-warnings',
    },
    devtool: 'eval-source-map',
  },
  common,
);
