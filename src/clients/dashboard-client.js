import { inject } from 'aurelia-framework';
import { Client } from './client';

@inject(Client)
export class DashboardClient {

  constructor(client) {
    this.client = client;
  }

  getDashboard(querystring) {
    return this.client.getFrom(`/dashboardApi/api/dashboard?${querystring}`).then(response => response.json());
  }
}
