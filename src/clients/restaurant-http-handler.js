// import { inject } from 'aurelia-framework';
// import { AuthService } from 'aurelia-auth';
import { HttpClient } from 'aurelia-fetch-client';
// import { ValidateInterceptor } from '../util/validate-interceptor';
import { constants } from '../util/constants';

// @inject(AuthService, ValidateInterceptor)
export class RestaurantHttpHandler extends HttpClient {

  // constructor(auth, interceptor) {
  constructor() {
    super();

    this.configure(config =>
      config
        .useStandardConfiguration()
        .withDefaults({
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'Fetch'
          }
        })
        // .withInterceptor(auth.tokenInterceptor)
        // .withInterceptor(interceptor)
        .withBaseUrl(constants.baseUrl));
  }
}
