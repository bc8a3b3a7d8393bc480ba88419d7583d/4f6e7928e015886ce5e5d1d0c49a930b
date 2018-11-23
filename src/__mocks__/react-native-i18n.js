import I18nJs from 'i18n-js';

I18nJs.locale = 'vi';
I18nJs.t = key => key;

const getLanguages = () => Promise.resolve(['en']);

export { getLanguages };
export default I18nJs;
