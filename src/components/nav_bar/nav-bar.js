import { bindable, inject } from 'aurelia-framework';
import LocalStorageManager from '../../util/local-storage-manager';

@inject(LocalStorageManager)
export class NavBar {
  @bindable router;
  @bindable authenticated;

  constructor(storage) {
    this.storage = storage;
  }

  logout() {
    this.storage.removeAuthToken();
    this.router.navigate('login');
  }
}
