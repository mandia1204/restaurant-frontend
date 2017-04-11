System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  packages: {
    "materialize-css": {
      "main": "dist/js/materialize.js",
      "map": {
        "../css/materialize.css": "../../../empty.css"
      }
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-auth": "npm:aurelia-auth@3.0.5",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.20.6",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "aurelia-validation": "npm:aurelia-validation@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "chart.js": "npm:chart.js@2.5.0",
    "clean-css": "npm:clean-css@4.0.11",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "materialize": "npm:materialize@1.0.0",
    "materialize-css": "npm:materialize-css@0.97.8",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:Dogfalo/materialize@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "npm:jquery@2.2.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:aurelia-auth@3.0.5": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
      "aurelia-router": "npm:aurelia-router@1.3.0"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-materialize-bridge@0.20.6": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1",
      "jquery": "npm:jquery@2.2.4",
      "materialize": "github:Dogfalo/materialize@0.97.8"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:aurelia-templating@1.4.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-validation@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.1"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chart.js@2.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chartjs-color": "npm:chartjs-color@2.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "moment": "npm:moment@2.18.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:chartjs-color-string@0.4.0": {
      "color-name": "npm:color-name@1.1.2"
    },
    "npm:chartjs-color@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chartjs-color-string": "npm:chartjs-color-string@0.4.0",
      "color-convert": "npm:color-convert@0.5.3"
    },
    "npm:clean-css@4.0.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:materialize-css@0.97.8": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:materialize@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "blur-image.js",
      "clients/client.js",
      "clients/dashboard-client.js",
      "clients/restaurant-http-handler.js",
      "clients/security-client.js",
      "components/common/confirmDialog.html!github:systemjs/plugin-text@0.0.8.js",
      "components/dashboard/dashboard.html!github:systemjs/plugin-text@0.0.8.js",
      "components/dashboard/dashboard.js",
      "components/dashboard/services/dashboard-service.js",
      "components/home/home.html!github:systemjs/plugin-text@0.0.8.js",
      "components/home/home.js",
      "components/login/login.html!github:systemjs/plugin-text@0.0.8.js",
      "components/login/login.js",
      "components/login/services/security-service.js",
      "components/login/validation/login-rules.js",
      "components/nav_bar/nav-bar-list.html!github:systemjs/plugin-text@0.0.8.js",
      "components/nav_bar/nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "components/nav_bar/nav-bar.js",
      "models/user.js",
      "routing/authorize-step.js",
      "routing/routes.js",
      "styles.css!github:systemjs/plugin-text@0.0.8.js",
      "util/chart-builder.js",
      "util/chart-colors.js",
      "util/chart-formatter.js",
      "util/colors.js",
      "util/constants.js",
      "util/dialog.js",
      "util/local-storage-manager.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:systemjs/plugin-css@0.1.20.js",
      "github:systemjs/plugin-css@0.1.20/css.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-auth@3.0.5.js",
      "npm:aurelia-auth@3.0.5/aurelia-auth.js",
      "npm:aurelia-auth@3.0.5/auth-fetch-config.js",
      "npm:aurelia-auth@3.0.5/auth-filter.js",
      "npm:aurelia-auth@3.0.5/auth-service.js",
      "npm:aurelia-auth@3.0.5/auth-utilities.js",
      "npm:aurelia-auth@3.0.5/authentication.js",
      "npm:aurelia-auth@3.0.5/authorize-step.js",
      "npm:aurelia-auth@3.0.5/base-config.js",
      "npm:aurelia-auth@3.0.5/oAuth1.js",
      "npm:aurelia-auth@3.0.5/oAuth2.js",
      "npm:aurelia-auth@3.0.5/popup.js",
      "npm:aurelia-auth@3.0.5/storage.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.1.2.js",
      "npm:aurelia-framework@1.1.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.20.6.js",
      "npm:aurelia-materialize-bridge@0.20.6/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.20.6/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.20.6/box/box.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.20.6/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.20.6/button/button.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/card/card.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.20.6/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.20.6/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.20.6/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.20.6/click-counter.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/click-counter.js",
      "npm:aurelia-materialize-bridge@0.20.6/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/md-colors.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/constants.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/events.js",
      "npm:aurelia-materialize-bridge@0.20.6/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.20.6/config-builder.js",
      "npm:aurelia-materialize-bridge@0.20.6/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.20.6/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown-fix.js",
      "npm:aurelia-materialize-bridge@0.20.6/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.20.6/exports.js",
      "npm:aurelia-materialize-bridge@0.20.6/fab/fab.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.20.6/file/file.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/file/file.js",
      "npm:aurelia-materialize-bridge@0.20.6/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.20.6/index.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/input/input.js",
      "npm:aurelia-materialize-bridge@0.20.6/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.20.6/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.20.6/pagination/pagination.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.20.6/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.20.6/progress/progress.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.20.6/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.20.6/radio/radio.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/range/range.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.20.6/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.20.6/select/select.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.20.6/slider/slider.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.20.6/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.20.6/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.20.6/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.20.6/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.20.6/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.20.6/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.20.6/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.20.6/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.20.6/well/md-well.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.4.1.js",
      "npm:aurelia-templating@1.4.1/aurelia-templating.js",
      "npm:aurelia-validation@1.0.0.js",
      "npm:aurelia-validation@1.0.0/aurelia-validation.js",
      "npm:aurelia-validation@1.0.0/get-target-dom-element.js",
      "npm:aurelia-validation@1.0.0/implementation/rules.js",
      "npm:aurelia-validation@1.0.0/implementation/standard-validator.js",
      "npm:aurelia-validation@1.0.0/implementation/util.js",
      "npm:aurelia-validation@1.0.0/implementation/validation-messages.js",
      "npm:aurelia-validation@1.0.0/implementation/validation-parser.js",
      "npm:aurelia-validation@1.0.0/implementation/validation-rules.js",
      "npm:aurelia-validation@1.0.0/property-info.js",
      "npm:aurelia-validation@1.0.0/validate-binding-behavior-base.js",
      "npm:aurelia-validation@1.0.0/validate-binding-behavior.js",
      "npm:aurelia-validation@1.0.0/validate-result.js",
      "npm:aurelia-validation@1.0.0/validate-trigger.js",
      "npm:aurelia-validation@1.0.0/validation-controller-factory.js",
      "npm:aurelia-validation@1.0.0/validation-controller.js",
      "npm:aurelia-validation@1.0.0/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@1.0.0/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@1.0.0/validator.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:chart.js@2.5.0.js",
      "npm:chart.js@2.5.0/src/chart.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Bar.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Bubble.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Doughnut.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Line.js",
      "npm:chart.js@2.5.0/src/charts/Chart.PolarArea.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Radar.js",
      "npm:chart.js@2.5.0/src/charts/Chart.Scatter.js",
      "npm:chart.js@2.5.0/src/controllers/controller.bar.js",
      "npm:chart.js@2.5.0/src/controllers/controller.bubble.js",
      "npm:chart.js@2.5.0/src/controllers/controller.doughnut.js",
      "npm:chart.js@2.5.0/src/controllers/controller.line.js",
      "npm:chart.js@2.5.0/src/controllers/controller.polarArea.js",
      "npm:chart.js@2.5.0/src/controllers/controller.radar.js",
      "npm:chart.js@2.5.0/src/core/core.animation.js",
      "npm:chart.js@2.5.0/src/core/core.canvasHelpers.js",
      "npm:chart.js@2.5.0/src/core/core.controller.js",
      "npm:chart.js@2.5.0/src/core/core.datasetController.js",
      "npm:chart.js@2.5.0/src/core/core.element.js",
      "npm:chart.js@2.5.0/src/core/core.helpers.js",
      "npm:chart.js@2.5.0/src/core/core.interaction.js",
      "npm:chart.js@2.5.0/src/core/core.js",
      "npm:chart.js@2.5.0/src/core/core.layoutService.js",
      "npm:chart.js@2.5.0/src/core/core.legend.js",
      "npm:chart.js@2.5.0/src/core/core.plugin.js",
      "npm:chart.js@2.5.0/src/core/core.scale.js",
      "npm:chart.js@2.5.0/src/core/core.scaleService.js",
      "npm:chart.js@2.5.0/src/core/core.ticks.js",
      "npm:chart.js@2.5.0/src/core/core.title.js",
      "npm:chart.js@2.5.0/src/core/core.tooltip.js",
      "npm:chart.js@2.5.0/src/elements/element.arc.js",
      "npm:chart.js@2.5.0/src/elements/element.line.js",
      "npm:chart.js@2.5.0/src/elements/element.point.js",
      "npm:chart.js@2.5.0/src/elements/element.rectangle.js",
      "npm:chart.js@2.5.0/src/platforms/platform.dom.js",
      "npm:chart.js@2.5.0/src/platforms/platform.js",
      "npm:chart.js@2.5.0/src/scales/scale.category.js",
      "npm:chart.js@2.5.0/src/scales/scale.linear.js",
      "npm:chart.js@2.5.0/src/scales/scale.linearbase.js",
      "npm:chart.js@2.5.0/src/scales/scale.logarithmic.js",
      "npm:chart.js@2.5.0/src/scales/scale.radialLinear.js",
      "npm:chart.js@2.5.0/src/scales/scale.time.js",
      "npm:chartjs-color-string@0.4.0.js",
      "npm:chartjs-color-string@0.4.0/color-string.js",
      "npm:chartjs-color@2.1.0.js",
      "npm:chartjs-color@2.1.0/index.js",
      "npm:color-convert@0.5.3.js",
      "npm:color-convert@0.5.3/conversions.js",
      "npm:color-convert@0.5.3/index.js",
      "npm:color-name@1.1.2.js",
      "npm:color-name@1.1.2/index.js",
      "npm:ieee754@1.1.8.js",
      "npm:ieee754@1.1.8/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:materialize-css@0.97.8/dist/js/materialize.js",
      "npm:moment@2.18.1.js",
      "npm:moment@2.18.1/moment.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js"
    ]
  },
  depCache: {
    "app.js": [
      "materialize-css/dist/js/materialize.js",
      "fetch",
      "aurelia-framework",
      "aurelia-auth",
      "./routing/authorize-step",
      "./routing/routes.js"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "clients/client.js": [
      "aurelia-framework",
      "aurelia-fetch-client",
      "./restaurant-http-handler"
    ],
    "clients/dashboard-client.js": [
      "aurelia-framework",
      "./client"
    ],
    "clients/restaurant-http-handler.js": [
      "aurelia-framework",
      "aurelia-auth",
      "aurelia-fetch-client",
      "../util/constants"
    ],
    "clients/security-client.js": [
      "aurelia-framework",
      "./client"
    ],
    "components/dashboard/dashboard.js": [
      "aurelia-framework",
      "./services/dashboard-service",
      "../../util/chart-builder",
      "../../util/chart-formatter"
    ],
    "components/dashboard/services/dashboard-service.js": [
      "aurelia-framework",
      "../../../clients/dashboard-client"
    ],
    "components/login/login.js": [
      "aurelia-framework",
      "aurelia-materialize-bridge",
      "aurelia-validation",
      "./services/security-service",
      "aurelia-router",
      "./validation/login-rules",
      "../../util/local-storage-manager",
      "../../util/dialog",
      "../../models/user"
    ],
    "components/login/services/security-service.js": [
      "aurelia-framework",
      "aurelia-validation",
      "../../../clients/security-client",
      "../validation/login-rules"
    ],
    "components/login/validation/login-rules.js": [
      "aurelia-validation"
    ],
    "components/nav_bar/nav-bar.js": [
      "aurelia-framework",
      "../../util/local-storage-manager"
    ],
    "routing/authorize-step.js": [
      "aurelia-framework",
      "aurelia-auth",
      "aurelia-router"
    ],
    "util/chart-builder.js": [
      "chart.js"
    ],
    "util/chart-formatter.js": [
      "./colors",
      "./chart-colors"
    ],
    "util/local-storage-manager.js": [
      "./constants"
    ]
  }
});