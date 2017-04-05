import { inject } from 'aurelia-framework';
import { SecurityClient } from '../../../clients/security-client';

@inject(SecurityClient)
export class SecurityService {

  constructor(client) {
    this.client = client;
  }

  authenticate(user) {
    return this.client.authenticate(user);
  }
}
