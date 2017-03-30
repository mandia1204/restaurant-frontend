import { inject } from 'aurelia-framework';
import { DashboardClient } from '../../../clients/dashboard-client';

@inject(DashboardClient)
export class DashboardService {

  constructor(client) {
    this.client = client;
  }

  getDashboard() {
    return this.client.getDashboard();
  }
}
