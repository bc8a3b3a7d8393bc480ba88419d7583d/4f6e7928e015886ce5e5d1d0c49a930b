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

    test('from now', () => {
      expect(moment(new Date(2018, 1, 1)).fromNow()).toBe('1 ngày trước');
    });
  });
});
