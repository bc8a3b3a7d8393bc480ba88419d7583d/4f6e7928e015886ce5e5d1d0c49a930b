import I18n from 'react-native-i18n';
import moment from 'moment';

import en from './locales/en';
import vi from './locales/vi';

import '../moment/locales/vi';

import '../moment';

export * from './i18n.util';

I18n.defaultLocale = 'en';
I18n.locale = 'en';
moment.locale('en');
I18n.fallbacks = true;
I18n.translations = {
  en,
  vi,
};

export default I18n;
