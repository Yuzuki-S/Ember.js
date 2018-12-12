import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('css');
  this.route('data');
  this.route('get-started');
  this.route('route');
  this.route('test');
});

export default Router;
