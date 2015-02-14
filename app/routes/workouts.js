import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('workout');
  },

  actions: {
    addExercise: function(workout) {
      this.store.createRecord('exercise', {
        'name': 'Goblet Squats',
        'duration': 20,
        'weight': 35,
        'workout': workout
      }).save();

      this.transitionTo('workouts.show', workout);
    }
  }
});
