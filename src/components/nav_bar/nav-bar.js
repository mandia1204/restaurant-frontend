import { bindable, inject, computedFrom } from 'aurelia-framework';
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
    this.filters = { navFilterYear: '2017', navFilterMonth: '4', type: ''};
  }

  logout() {
    this.storage.removeAuthToken();
    this.router.navigate('login');
  }

  @computedFrom('router.currentInstruction.config.showNavFilters')
  get showFilters() {
    if (this.router.currentInstruction === null) {
      return false;
    }
    return this.router.currentInstruction.config.showNavFilters;
  }

  refreshDashboard() {
    this.filters.type = 'all';
    this.notifyDashboardFiltersChanged();
  }

  notifyDashboardFiltersChanged() {
    this.ea.publish('nav-bar-dashboard-filter-changed', this.filters);
  }

  selectChange(ev) {
    var target = ev.target || ev.srcElement;
    this.filters[target.name] = target.value;
    this.filters.type = target.attributes.filter.value;
    this.notifyDashboardFiltersChanged();
  }
}
