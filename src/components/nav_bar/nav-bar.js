import { bindable, inject } from 'aurelia-framework';
import LocalStorageManager from '../../util/local-storage-manager';

@inject(LocalStorageManager)
export class NavBar {
  @bindable router;
  @bindable authenticated;

  constructor(storage) {
    this.storage = storage;
  }

  attached() {
    $('.button-collapse').sideNav();
  }

  logout() {
    this.storage.removeAuthToken();
    this.router.navigate('login');
  }
}
