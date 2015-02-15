import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('workouts', function() {
    this.route('show', { path: '/:workout_id' });
  });
  this.route('today');
});

export default Router;
