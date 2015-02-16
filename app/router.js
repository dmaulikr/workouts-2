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
  this.route('saturday');
  this.route('monday');
  this.route('sunday');
  this.route('tuesday');
  this.route('wednesday');
  this.route('thursday');
  this.route('friday');
});

export default Router;
