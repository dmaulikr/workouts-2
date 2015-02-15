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
  assert.equal(dateHelpers.currentDate('LL'), window.moment().format('LL'));
});
