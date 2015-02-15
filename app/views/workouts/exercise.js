import Ember from 'ember';
import ExerciseTmpl from '../../templates/workouts/exercise';

export default Ember.View.extend({
  isEditing: false,

  template: ExerciseTmpl,

  tagName: 'tr',

  doubleClick: function() {
    this._toggleEdit();
  },

  hammerOptions: {
    taps: 2
  },

  gestures: {
    tap: function() {
      this._toggleEdit();
      return false;
    }
  },

  disableEdit: function() {
    this.set('isEditing', false);
  },

  _toggleEdit: function() {
    this.set('isEditing', !this.isEditing);
  }
});
