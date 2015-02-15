import Ember from 'ember';
import dateHelpers from '../utils/date-helpers';

export default Ember.Controller.extend({
  title: dateHelpers.currentDate()
});
