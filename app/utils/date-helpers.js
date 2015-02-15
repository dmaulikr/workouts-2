function formatDate(date, format) {
  if (format === undefined) { format = 'll'; }
  return window.moment(date).format(format);
}

function currentDate(format) {
  if (format === undefined) { format = 'dddd, MMM Do'; }
  return formatDate(new Date(), format);
}

export default {
  formatDate,
  currentDate
};
