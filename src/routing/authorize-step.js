import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';

@inject(AuthService)
export default class AuthorizeStep {
  homeRoute = 'home';
  isLoggedIn;

  constructor(authService) {
    this.authService = authService;
  }

  run(routingContext, next) {
    this.updateAttributes();
    if (routingContext.getAllInstructions().some(i => i.config.auth)) {
      if (!this.isLoggedIn) {
        return next.cancel();
      }
    }
    return next();
  }

  updateAttributes() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
