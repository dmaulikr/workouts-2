import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:today', {
  // Specify the other units that are required for this test.
});

test('sets the title to a nicely formated today', function(assert) {
  var controller = this.subject();

  assert.equal(controller.title, window.moment().format('dddd'));
});
