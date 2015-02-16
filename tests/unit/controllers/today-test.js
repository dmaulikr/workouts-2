import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:today', {
  // Specify the other units that are required for this test.
});

test('sets the currentDay to a nicely formated today', function(assert) {
  var controller = this.subject();

  assert.equal(controller.currentDay, window.moment().format('dddd'));
});

test('sets the nextDay', function(assert) {
  var controller = this.subject(),
      tomorrow = window.moment(new Date()).add(1, 'days').format('dddd');

  assert.equal(controller.nextDay, tomorrow.toLowerCase());
});

test('sets the prevDay', function(assert) {
  var controller = this.subject(),
      yesterday = window.moment(new Date()).subtract(1, 'days').format('dddd');

  assert.equal(controller.prevDay, yesterday.toLowerCase());
});
