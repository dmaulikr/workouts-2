import Ember from 'ember';

export default Ember.ObjectController.extend({
  newExerciseName: '',

  newExerciseDuration: '',

  newExerciseWeight: '',

  actions: {
    saveNewExercise: function() {
      if(!this.newExerciseName.trim()) { return false; }

      this.store.createRecord('exercise', {
        name: this.newExerciseName,
        duration: this.newExerciseDuration,
        weight: this.newExerciseWeight,
        workout: this.model
      }).save();

      this.set('newExerciseName', '');
      this.set('newExerciseDuration', '');
      this.set('newExerciseWeight', '');
    },

    updateExercise: function(exercise) {
      exercise.save();
      exercise.set('isEditing', false);
    },

    editExercise: function(exercise) {
      exercise.set('isEditing', true);
    }
  },
});
