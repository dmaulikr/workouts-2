import Ember from 'ember';
import dateHelpers from '../utils/date-helpers';

export default Ember.Controller.extend({
  currentDay: dateHelpers.currentDate({ format: 'dddd' }),

  nextDay: dateHelpers.nextDay(new Date()),

  prevDay: dateHelpers.prevDay(new Date())
});
