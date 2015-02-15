import Ember from 'ember';
import ExerciseTmpl from '../../templates/exercises/exercise';

export default Ember.View.extend({
  isEditing: false,

  template: ExerciseTmpl,

  tagName: 'tr',

  doubleClick: function() {
    this.enableEdit();
  },

  hammerOptions: {
    taps: 2
  },

  gestures: {
    tap: function() {
      this.enableEdit();
      return false;
    }
  },

  disableEdit: function() {
    this.set('isEditing', false);
  },

  enableEdit: function() {
    this.set('isEditing', true);
  }
});
