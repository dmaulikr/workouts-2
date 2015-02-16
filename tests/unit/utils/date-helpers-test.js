import dateHelpers from '../../../utils/date-helpers';
import { module, test } from 'qunit';

module('dateHelpers');

// Replace this with your real tests.
test('formats dates', function(assert) {
  // default format
  assert.equal(dateHelpers.formatDate('2010-10-30'), 'Oct 30, 2010');

  // explicit format
  assert.equal(dateHelpers.formatDate('2011-09-09', 'l'), '9/9/2011');
});

test('returns current date formatted nicely', function(assert) {
  // default format
  assert.equal(dateHelpers.currentDate(), window.moment().format('dddd, MMM Do'));

  // explicit format
  assert.equal(dateHelpers.currentDate({ format: 'LL' }), window.moment().format('LL'));
});

test('returns nextDay based off date passed in', function(assert) {
  var today = new Date(),
      tomorrow = window.moment(today).add(1, 'days'),
      expected = window.moment(tomorrow).format('dddd');

  assert.equal(dateHelpers.nextDay(today), expected.toLowerCase());
});

test('returns prevDay based off date passed in', function(assert) {
  var today = new Date(),
      yesterday = window.moment(today).subtract(1, 'days'),
      expected = window.moment(yesterday).format('dddd');

  assert.equal(dateHelpers.prevDay(today), expected.toLowerCase());
});
