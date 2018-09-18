const fs = require('fs-extra');
const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const WebpackBar = require('webpackbar');
const paths = require('./paths');

module.exports = (target = 'web', env = 'dev', {
  clearConsole = true,
  host = 'localhost',
  port = 3000,
  modify,
  plugins,
  modifyBabelOptions,
}, webpackObject) => {
  const hasBabelRc = fs.existsSync(paths.appBabelRc);
  const mainBabelOptions = {
    babelrc: true,
    cacheDirectory: true,
    presets: [],
  };

  const hasEslintRc = fs.existsSync(paths.appEslintRc);
  const mainEslintOptions = {
    formatter: eslintFormatter,
    eslintPath: require.resolve('eslint'),
    ignore: false,
    useEslintrc: true,
  };

  const babelOptions = modifyBabelOptions ? modifyBabelOptions(mainBabelOptions) : mainBabelOptions;

  if (hasBabelRc && babelOptions.babelrc) {
    console.log('Using .babelrc defined in your app root');
  }

  if (hasEslintRc) {
    console.log('Using .eslintrc defined in your app root');
  }

  const IS_NODE = target === 'node';
  const IS_WEB = target === 'web';
  const IS_PROD = env === 'prod';
  const IS_DEV = env === 'dev';

  const config = {

  };
};
