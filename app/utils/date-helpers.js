function formatDate(date, format) {
  if (format === undefined) { format = 'll'; }
  return window.moment(date).format(format);
}

function currentDate(options) {
  options = options || {};
  if (options.format === undefined) { options.format = 'dddd, MMM Do'; }
  return formatDate(new Date(), options.format);
}

function nextDay(date) {
  return _dayNameFromTimeTravel('add', 1, 'days', date);
}

function prevDay(date) {
  return _dayNameFromTimeTravel('subtract', 1, 'days', date);
}

function _dayNameFromTimeTravel(direction, number, period, date) {
  var traveled = window.moment(date)[direction](1, 'days'),
      dayName = traveled.format('dddd');

  return dayName.toLowerCase();
}

export default {
  formatDate,
  currentDate,
  nextDay,
  prevDay
};
