const path = require('path');
const webpack = require('webpack');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
  mode: 'development',
  context: process.cwd(),
  target: 'web',
  devtool: 'source-map',
  watch: true,
  entry: [
    'razzle-dev-utils/prettyNodeErrors',
    'webpack/hot/poll?300',
    path.join(__dirname, '/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  resolve:{
    alias:{
      'webpack/hot/poll': require.resolve('webpack/hot/poll'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  module: {
    strictExportPresence: true,
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
      ],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs:['-r', 'source-map-support/register'],
    }),
  ],
  node: {
    fs: 'empty'
  }
};
