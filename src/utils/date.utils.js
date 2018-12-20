import moment from 'moment';

const supportedDateFormats = {
  ddddDDMMMYYYY: 'dddd, DD MMM YYYY',
};

const format = (date, dateFormat) => moment(date).format(dateFormat);

export default {
  format,
  supportedDateFormats,
};
