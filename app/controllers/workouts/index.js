import Ember from 'ember';

export default Ember.ArrayController.extend({
  newWorkoutName: '',

  actions: {
    addWorkout: function() {
      if (!this.newWorkoutName.trim()) { return; }
      this._createWorkout();
      this.set('newWorkoutName', '');
    }
  },

  _createWorkout: function() {
    this.store.createRecord('workout', {
      name: this.newWorkoutName
    }).save();
  }
});
