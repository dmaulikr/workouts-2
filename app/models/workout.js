import DS from 'ember-data';

var Workout = DS.Model.extend({
  name: DS.attr('string')
});

Workout.reopenClass({
  FIXTURES: [{ id: 1, name: 'Cardio' },
             { id: 2, name: 'Core' }]
});

export default Workout;
