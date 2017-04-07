import { inject } from 'aurelia-framework';
import { ValidationControllerFactory, ValidationRules } from 'aurelia-validation';
import { SecurityClient } from '../../../clients/security-client';

@inject(ValidationControllerFactory, SecurityClient)
export class SecurityService {

  constructor(validationCtlrFactory, client) {
    this.validator = validationCtlrFactory.createForCurrentScope();
    this.client = client;
  }

  authenticate(user) {
    this.validator.reset();
    const rules = this._getValidationRules();
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

  _getValidationRules() {
    return ValidationRules
      .ensure(a => a.userName).required().minLength(3).maxLength(10)
      .ensure(a => a.password).required().minLength(3).maxLength(10)
      .rules;
  }
}
