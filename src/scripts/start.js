process.env.NODE_ENV = 'development';
const webpack = require('webpack');
const devServer = require('webpack-dev-server-speedy');
const printErrors = require('razzle-dev-utils/printErrors');
const logger = require('razzle-dev-utils/logger');
const setPorts = require('razzle-dev-utils/setPorts');
const webpackConfig = require('../../webpack.config');

function main() {
  logger.start('Compiling...');
  const clientConfig = webpackConfig;
  const serverConfig = Object.assign({},webpackConfig,{target:'node'});

  const clientCompiler = compile(clientConfig);
  const serverCompiler = compile(serverConfig);

  clientCompiler.plugin('done', () => {
    serverCompiler.watch(
      {
        quiet: true,
        stats: 'none',
      },
      /* eslint-disable no-unused-vars */
      stats => {}
    );
  });

  const clientDevServer = new devServer(clientCompiler, clientConfig.devServer);
  clientDevServer.listen(
    (process.env.PORT && parseInt(process.env.PORT) + 1) || 3001,
    err => {
      if (err) {
        logger.error(err);
      }
    }
  );
}

function compile(config){
  let compiler;
  try {
    compiler = webpack(config);
  } catch(e){
    printErrors('Failed to compile.',[e]);
    process.exit(1);
  }
  return compiler;
}

setPorts()
  .then(main)
  .catch(console.error);