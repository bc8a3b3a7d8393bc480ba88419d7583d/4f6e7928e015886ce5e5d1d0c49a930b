import mockDate from 'mockdate';
import { origin as moment } from 'moment';

import '../locales/vi';

describe('moment locales', () => {
  describe('vietnamese', () => {
    moment.locale('vi');

    beforeEach(() => {
      mockDate.set(new Date(2018, 1, 2));
    });

    afterEach(() => {
      mockDate.reset();
    });

    test('should return "1 day ago" from fromNow function', () => {
      expect(moment(new Date(2018, 1, 1)).fromNow()).toBe('1 ngày trước');
    });

    test('check afternoon time', () => {
      const monmentObj = moment(new Date('January 31 1980 12:30'));
      expect(monmentObj.localeData().isPM(monmentObj.format('A'))).toBe(true);
    });

    test('should return morning time symbol in lowercase', () => {
      const momentObj = moment(new Date('January 31 1980 6:30'));
      const hour = momentObj.hour();
      const minutes = momentObj.minute();
      const result = momentObj.localeData().meridiem(hour, minutes, true);
      expect(result).toBe('sa');
    });

    test('should return morning time symbol in uppercase', () => {
      const momentObj = moment(new Date('January 31 1980 6:30'));
      const hour = momentObj.hour();
      const minutes = momentObj.minute();
      const result = momentObj.localeData().meridiem(hour, minutes, false);
      expect(result).toBe('SA');
    });

    test('should return afternoon time symbol in lowercase', () => {
      const momentObj = moment(new Date('January 31 1980 12:30'));
      const hour = momentObj.hour();
      const minutes = momentObj.minute();
      const result = momentObj.localeData().meridiem(hour, minutes, true);
      expect(result).toBe('ch');
    });

    test('should return afternoon time symbol in uppercase', () => {
      const momentObj = moment(new Date('January 31 1980 12:30'));
      const hour = momentObj.hour();
      const minutes = momentObj.minute();
      const result = momentObj.localeData().meridiem(hour, minutes, true);
      expect(result).toBe('ch');
    });

    test('should return ordinal number', () => {
      const momentObj = moment(new Date('January 31 1980 12:30'));
      const number = 1;
      expect(momentObj.localeData().ordinal(number)).toBe(number);
    });
  });
});
