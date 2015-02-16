function formatDate(date, format) {
  if (format === undefined) { format = 'll'; }
  return window.moment(date).format(format);
}

function currentDate(options) {
  options = options || {};
  if (options.format === undefined) { options.format = 'dddd, MMM Do'; }
  return formatDate(new Date(), options.format);
}

export default {
  formatDate,
  currentDate
};
