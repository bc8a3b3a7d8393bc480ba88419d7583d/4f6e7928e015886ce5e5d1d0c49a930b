import I18n from 'react-native-i18n';
import moment from 'moment';

import {
  keyWithNameSpace,
  translateWithNamespace,
  setAppLanguage,
  getAppLanguage,
} from './i18n.util';

describe('I18n util', () => {
  describe('translateWithNamespace', () => {
    test('should combine namepsace and term', () => {
      expect(translateWithNamespace('form')('errors.title')).toEqual(
        'form.errors.title',
      );
    });
  });
  describe('keyWithNameSpace', () => {
    test('should combine namepsace and term', () => {
      expect(keyWithNameSpace('ns')('term')).toEqual('ns.term');
    });
  });

  describe('setAppLanguage', () => {
    test('vi should change language of I18n and moment to vi', () => {
      setAppLanguage('vi');
      expect(I18n.locale).toBe('vi');
      expect(moment.locale()).toBe('vi');
      expect(getAppLanguage()).toBe('vi');
    });

    test('en should change language of I18n and moment to en', () => {
      setAppLanguage('en');
      expect(I18n.locale).toBe('en');
      expect(moment.locale()).toBe('en');
      expect(getAppLanguage()).toBe('en');
    });
  });
});
