import 'materialize-css';

export class App {
  configureRouter(config, router) {
    config.title = 'Restaurant System 1.0';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'components/home/home', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }
}
