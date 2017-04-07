import { inject } from 'aurelia-framework';
import { ValidationControllerFactory } from 'aurelia-validation';
import { SecurityClient } from '../../../clients/security-client';
import LoginRules from '../validation/login-rules';

@inject(ValidationControllerFactory, SecurityClient)
export class SecurityService {

  constructor(validationCtlrFactory, client) {
    this.validator = validationCtlrFactory.createForCurrentScope();
    this.client = client;
  }

  authenticate(user) {
    this.validator.reset();
    const rules = LoginRules();
    return this.validator.validate({object: user, rules: rules})
      .then(result => ({valid: result.valid, user}) )
      .then(this._callAuthService.bind(this));
  }

  _callAuthService(result) {
    if (!result.valid) {
      return { errors: this.validator.errors };
    }
    return this.client.authenticate(result.user);
  }
}
