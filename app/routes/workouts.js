import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return this.store.find('workout');
  },

  actions: {
    saveNewExercise: function(workout) {
      if (workout.newExerciseName === undefined) {
        return false;
      }

      this.store.createRecord('exercise', {
        name: workout.newExerciseName,
        duration: workout.newExerciseDuration,
        weight: workout.newExerciseWeight,
        workout: workout
      }).save();

      workout.set('newExerciseName', null);
      workout.set('newExerciseDuration', null);
      workout.set('newExerciseWeight', null);
    }
  },
});
