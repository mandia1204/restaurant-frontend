/* global window */

export const constants = {
  baseUrl: 'http://localhost:5000',
  //urlRedirect: window.env.URL_REDIRECT,
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
  BAR_MONTHS: {'Enero': { background: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255,99,132,1)' },
    'Febrero': { background: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' },
    'Marzo': { background: 'rgba(255, 206, 86, 0.2)', border: 'rgba(255, 206, 86, 1)' },
    'Abril': { background: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' },
    'Mayo': { background: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' },
    'Junio': { background: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' },
    'Julio': { background: 'rgba(255, 159, 64, 0.2)', border: 'rgba(255, 159, 64, 1)' },
    'Agosto': { background: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255,99,132,1)' },
    'Septiembre': { background: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)' },
    'Octubre': { background: 'rgba(255, 206, 86, 0.2)', border: 'rgba(255, 206, 86, 1)' },
    'Noviembre': { background: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)' },
    'Diciembre': { background: 'rgba(153, 102, 255, 0.2)', border: 'rgba(153, 102, 255, 1)' }
  }
};
