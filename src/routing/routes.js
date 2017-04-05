const routes = [
  { route: ['login'], name: 'login', moduleId: 'components/login/login', nav: true, auth: false, title: 'Login' },
  { route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: true, auth: true, title: 'Home' },
  { route: ['dashboard'], name: 'dashboard', moduleId: 'components/dashboard/dashboard', nav: true, auth: true, title: 'Dashboard' }
];

export default routes;
