import 'materialize-css';
import 'fetch'; //only for ios devices that don't have latest version
import { inject } from 'aurelia-framework';
import { AuthService, FetchConfig } from 'aurelia-auth';
import AuthorizeStep  from './routing/authorize-step';
import routes from './routing/routes.js';

@inject(AuthService, FetchConfig)
export class App {

  constructor(authService, fetchConfig) {
    this.fetchConfig = fetchConfig;
    this.authService = authService;
  }

  configureRouter(config, router) {
    config.title = 'Logo';
    config.addAuthorizeStep(AuthorizeStep);
    config.map(routes);
    this.router = router;
  }

  activate() {
    this.fetchConfig.configure();
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
