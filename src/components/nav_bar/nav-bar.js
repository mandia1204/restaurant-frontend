import { bindable, inject } from 'aurelia-framework';
import LocalStorageManager from '../../util/local-storage-manager';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator, LocalStorageManager)
export class NavBar {
  @bindable router;
  @bindable authenticated;

  constructor(eventAggregator, storage) {
    this.storage = storage;
    this.ea = eventAggregator;
    this.years = ['2015', '2016', '2017'];
  }

  logout() {
    this.storage.removeAuthToken();
    this.router.navigate('login');
  }

  yearSelectChange(ev) {
    this.ea.publish('nav-bar-year-select-changed', { year: ev.srcElement.value});
  }
}
