import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';
import { Redirect } from 'aurelia-router';

@inject(AuthService)
export default class AuthorizeStep {
  loginRoute = 'login';
  isLoggedIn;

  constructor(authService) {
    this.authService = authService;
  }

  run(routingContext, next) {
    this.updateAttributes();
    if (routingContext.getAllInstructions().some(i => i.config.auth)) {
      if (!this.isLoggedIn) {
        return next.cancel(new Redirect(this.loginRoute));
      }
    }
    return next();
  }

  updateAttributes() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
