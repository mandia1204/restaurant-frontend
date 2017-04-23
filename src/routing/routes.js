const routes = [
  { route: ['login'], name: 'login', moduleId: 'components/login/login', nav: false, auth: false, title: 'Login' },
  { route: ['', 'home'], name: 'home', moduleId: 'components/home/home', icon: 'home', nav: true, auth: true, title: 'Home' },
  { route: ['dashboard'], name: 'dashboard', moduleId: 'components/dashboard/dashboard', icon: 'dashboard', nav: true, auth: true, title: 'Dashboard' },
  { route: ['user'], name: 'user', moduleId: 'components/user/user', icon: 'face', nav: true, auth: true, title: 'User' }
];

export default routes;
