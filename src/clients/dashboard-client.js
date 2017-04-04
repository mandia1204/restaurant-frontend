import { inject } from 'aurelia-framework';
import { Client } from './client';

@inject(Client)
export class DashboardClient {

  constructor(client) {
    this.client = client;
  }

  getDashboard() {
    return this.client.getFrom('/dashboardApi/api/dashboard').then(response => response.json());
  }
}
