import I18n from 'react-native-i18n';
import moment from 'moment';

const translateWithNamespace = namespace => (term, param) =>
  I18n.t(`${namespace}.${term}`, param);

const keyWithNameSpace = namespace => term => `${namespace}.${term}`;

const setAppLanguage = lang => {
  I18n.defaultLocale = lang;
  I18n.locale = lang;
  moment.locale(lang);
};

const getAppLanguage = () => I18n.locale;

export {
  translateWithNamespace,
  keyWithNameSpace,
  setAppLanguage,
  getAppLanguage,
};
