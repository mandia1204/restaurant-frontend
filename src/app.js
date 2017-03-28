import 'materialize-css';

export class App {
  configureRouter(config, router) {
    config.title = 'Logo';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: true, title: 'Home' },
      { route: ['dashboard'], name: 'dashboard', moduleId: 'components/dashboard/dashboard', nav: true, title: 'Dashboard' }
    ]);

    this.router = router;
  }
}
