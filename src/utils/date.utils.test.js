import DateUtils from './date.utils';

describe('Utils/Date', () => {
  test('format "weekday, DD MMM YYYY"', () => {
    const dateString = '12 Dec 2018'; // Wednesday
    const result = DateUtils.format(
      dateString,
      DateUtils.supportedDateFormats.ddddDDMMMYYYY,
    );
    expect(result).toEqual('Wednesday, 12 Dec 2018');
  });
});
