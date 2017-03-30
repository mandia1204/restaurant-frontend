/* global window */

export const constants = {
  baseUrl: window.env.BASE_SERVER_URL,
  urlRedirect: window.env.URL_REDIRECT,
  AURELIA_TOKEN: 'aurelia_token',
  ACCESS_TOKEN: 'access_token',
  FIRST_LOGIN: 'first_login',
  BAD_REQUEST: 400,
  EXPIRED_TOKEN_STATUS: 401,
  FIRST_LOGIN_STATUS: 404,
  SUCCESS_STATUS: 200,
  NO_CONTENT: 204,
  INTERNAL_SERVER_ERROR: 500,
  EMPTY_STRING: '',
  NOTIFICATION_ALLOWED: false
};
