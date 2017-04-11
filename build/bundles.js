module.exports = {
  'bundles': {
    'dist/app-build': {
      'includes': [
        '[**/*.js]',
        '**/*.html!text',
        '**/*.css!text'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': true,
        'rev': false
      }
    },
    'dist/aurelia': {
      'includes': [
        'aurelia-framework',
        'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'aurelia-templating-binding',
        'aurelia-polyfills',
        'aurelia-templating-resources',
        'aurelia-templating-router',
        'aurelia-loader-default',
        'aurelia-history-browser',
        'aurelia-logging-console',
        'aurelia-auth',
        'aurelia-validation',
        'bootstrap',
        'bootstrap/css/bootstrap.css!text',
        'fetch',
        'jquery',
        'text',
        '[materialize-css/dist/js/materialize.js]',
        'aurelia-materialize-bridge',
        'aurelia-materialize-bridge/**/*.js',
        'aurelia-materialize-bridge/**/*.html!text',
        'aurelia-materialize-bridge/**/*.css!text',
        'css',
        'chart.js'
      ],
      'options': {
        'inject': true,
        'minify': true,
        'depCache': false,
        'rev': false
      }
    }
  }
};
