import 'materialize-css';

export class App {
  configureRouter(config, router) {
    config.title = 'Logo';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
