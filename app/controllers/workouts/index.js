import Ember from 'ember';

export default Ember.ArrayController.extend({
  newWorkoutName: '',

  actions: {
    save: function() {
      if (!this.newWorkoutName.trim()) { return; }

      this.store.createRecord('workout', {
        name: this.newWorkoutName
      }).save().then(function() {
        this.newWorkoutName = null;
      });
    }
  }
});
