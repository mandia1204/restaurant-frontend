import { bindable, inject } from 'aurelia-framework';
import LocalStorageManager from '../../util/local-storage-manager';
import { EventAggregator } from 'aurelia-event-aggregator';
import { years, months } from '../../util/constants';

@inject(EventAggregator, LocalStorageManager)
export class NavBar {
  @bindable router;
  @bindable authenticated;

  constructor(eventAggregator, storage) {
    this.storage = storage;
    this.ea = eventAggregator;
    this.years = years;
    this.months = months;
    this.filters = { navFilterYear: '2017', navFilterMonth: '4'};
  }

  logout() {
    this.storage.removeAuthToken();
    this.router.navigate('login');
  }

  refreshDashboard() {
    this.notifyDashboardFiltersChanged();
  }

  notifyDashboardFiltersChanged() {
    this.ea.publish('nav-bar-dashboard-filter-changed', this.filters);
  }

  selectChange(ev) {
    this.filters[ev.srcElement.name] = ev.srcElement.value;
    this.notifyDashboardFiltersChanged();
  }
}
