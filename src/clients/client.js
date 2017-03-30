import { inject } from 'aurelia-framework';
import { json } from 'aurelia-fetch-client';
import { RestaurantHttpHandler } from './restaurant-http-handler';

@inject(RestaurantHttpHandler)
export class Client {

  constructor(http) {
    this.http = http;
  }

  getFrom(uri) {
    return this.http.fetch(uri);
  }

  postEmptyBodyTo(uri) {
    return this.http
        .fetch(uri, {
          method: 'post'
        });
  }

  postTo(uri, element) {
    return this.http
        .fetch(uri, {
          method: 'post',
          body: json(element)
        });
  }

  putTo(uri, element) {
    return this.http
        .fetch(uri, {
          method: 'put',
          body: json(element)
        });
  }

  deleteFrom(uri) {
    return this.http
        .fetch(uri, {
          method: 'delete'
        });
  }

}
