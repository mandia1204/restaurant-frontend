import { inject } from 'aurelia-framework';
import { SecurityService } from './services/security-service';
import { Router } from 'aurelia-router';
import LocalStorageManager from '../../util/local-storage-manager';
import Dialog from '../../util/dialog';
import User from '../../models/user';

@inject(LocalStorageManager, Router, SecurityService, Dialog)
export class Login {

  constructor(storage, router, service, dialog) {
    this.title = 'Please, login into your account';
    this.storage = storage;
    this.router = router;
    this.service = service;
    this.dialog = dialog;
    this.user = User();
    this.isValid = true;
  }

  login() {
    this.isValid = true;
    this.service.authenticate(this.user).then((response) => {
      if (response.errors) {
        console.log('display errors');
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
      console.log(err);
    }
  }
}
