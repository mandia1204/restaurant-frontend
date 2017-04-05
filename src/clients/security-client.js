import { inject } from 'aurelia-framework';
import { Client } from './client';

@inject(Client)
export class SecurityClient {

  constructor(client) {
    this.client = client;
  }

  authenticate(user) {
    return this.client.postTo('/securityApi/token', user);
  }
}
