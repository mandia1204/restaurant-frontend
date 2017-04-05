/* global localStorage */
import { constants } from './constants';

class LocalStorageManager {
  getAuthToken() {
    return localStorage.getItem(constants.AURELIA_TOKEN);
  }

  setAuthToken(token) {
    localStorage.setItem(constants.AURELIA_TOKEN, token);
  }

  removeAuthToken() {
    localStorage.removeItem(constants.AURELIA_TOKEN);
  }

  getJsonWebTokenBody() {
    const jwt = this.getAuthToken();
    // eslint-disable-next-line no-undef
    return jwt_decode(jwt);
  }
}
export default LocalStorageManager;
