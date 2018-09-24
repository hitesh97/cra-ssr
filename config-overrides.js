const rewireSass = require('react-app-rewire-scss');
const WebpackBar = require('webpackbar');

module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config = rewireSass(config, env);
  // with loaderOptions
  // config = rewireSass.withLoaderOptions(someLoaderOptions)(config, env);
  //config.plugins.push(new WebpackBar({ profile: true }));
  config.plugins.push(new WebpackBar());
  return config;
};
