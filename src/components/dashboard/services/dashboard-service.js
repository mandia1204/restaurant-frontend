import { inject } from 'aurelia-framework';
import { DashboardClient } from '../../../clients/dashboard-client';

@inject(DashboardClient)
export class DashboardService {

  constructor(client) {
    this.client = client;
  }

  getDashboard(params) {
    const queryStringParams = $.param(params);
    return this.client.getDashboard(queryStringParams);
  }
}
