import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';
import { HttpClient } from 'aurelia-fetch-client';
import { constants } from '../util/constants';

@inject(AuthService)
export class RestaurantHttpHandler extends HttpClient {

  constructor(auth) {
    super();

    this.configure(config =>
      config
        .useStandardConfiguration()
        .withDefaults({
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        .withInterceptor(auth.tokenInterceptor)
        .withBaseUrl(constants.baseUrl));
  }
}
