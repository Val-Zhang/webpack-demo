process.env.NODE_ENV = 'development';
const fs = require('fs-extra');
const webpack = require('webpack');
const devServer = require('webpack-dev-server-speedy');
const printErrors = require('razzle-dev-utils/printErrors');
const clearConsole = require('react-dev-utils/clearConsole');
const logger = require('razzle-dev-utils/logger');
const setPorts = require('razzle-dev-utils/setPorts');
const webpackConfig = require('../../webpack.config');

function main() {
  logger.start('Compiling...');
  const clientConfig = {};
  const serverConfig = {};
}
