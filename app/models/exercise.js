import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('string'),
  weight: DS.attr('number'),
  workout: DS.belongsTo('workout'),
  isEditing: DS.attr('boolean', { defaultValue: false })
});
