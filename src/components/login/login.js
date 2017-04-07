import { inject } from 'aurelia-framework';
import { MaterializeFormValidationRenderer } from 'aurelia-materialize-bridge';
import { ValidationControllerFactory } from 'aurelia-validation';
import { SecurityService } from './services/security-service';
import { Router } from 'aurelia-router';
import LoginRules from './validation/login-rules';
import LocalStorageManager from '../../util/local-storage-manager';
import Dialog from '../../util/dialog';
import User from '../../models/user';


@inject(ValidationControllerFactory, LocalStorageManager, Router, SecurityService, Dialog)
export class Login {

  constructor(validationCtlrFactory, storage, router, service, dialog) {
    this.title = 'Please, login into your account';
    this.validator = validationCtlrFactory.createForCurrentScope();
    this.validator.addRenderer(new MaterializeFormValidationRenderer());
    this.storage = storage;
    this.router = router;
    this.service = service;
    this.rules = LoginRules();
    this.dialog = dialog;
    this.user = User();
    this.isValid = true;
    this.errors = {'userName': 'invalid'};
  }

  login() {
    this.isValid = true;
    this.service.authenticate(this.user).then((response) => {
      if (response.errors) {
        this.validator.validate();
      } else {
        response.json().then(this._processSuccess.bind(this));
      }
    }).catch(this._processError.bind(this));
  }

  _processSuccess(data) {
    this.storage.setAuthToken(data.token);
    this.router.navigate('home');
  }

  _processError(err) {
    if (err.statusText === 'Unauthorized') {
      this.isValid = false;
    } else {
      this.dialog.show('There was an error in the application.');
      /*eslint-disable no-console*/
      console.log(err);
    }
  }
}
