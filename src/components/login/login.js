import { inject } from 'aurelia-framework';
import { SecurityService } from './services/security-service';
import { Router } from 'aurelia-router';
import LocalStorageManager from '../../util/local-storage-manager';

@inject(LocalStorageManager, Router, SecurityService)
export class Login {

  constructor(storage, router, service) {
    this.title = 'Please, login into your account';
    this.service = service;
    this.router = router;
    this.storage = storage;
    this.user = { userName: '', password: ''};
  }

  login() {
    this.service.authenticate(this.user).then((response) => {
      response.json().then((data) => {
        this.storage.setAuthToken(data.token);
        this.router.navigate('home');
      });
    }).catch((err) => {
      console.log(err.statusText);
    });
  }
}
