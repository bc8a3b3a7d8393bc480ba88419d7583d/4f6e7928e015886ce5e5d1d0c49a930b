const languages = [
  {
    flag: 'VN',
    countryName: 'Việt Nam',
    countryCode: 'VN',
    languageName: 'Tiếng Việt',
    languageCode: 'vi',
  },
  {
    flag: 'VN',
    countryName: 'Viet Nam',
    countryCode: 'VN',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'ID',
    countryName: 'Indonesia',
    countryCode: 'ID',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'ID',
    countryName: 'Indonesia',
    countryCode: 'ID',
    languageName: 'Indonesia',
    languageCode: 'id',
  },
  {
    flag: 'MY',
    countryName: 'Malaysia',
    countryCode: 'MY',
    languageName: 'Bahasa Melayu',
    languageCode: 'ms',
  },
  {
    flag: 'MY',
    countryName: 'Malaysia',
    countryCode: 'MY',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'PH',
    countryName: 'Philipines',
    countryCode: 'PH',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'SG',
    countryName: 'Singapore',
    countryCode: 'SG',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'TH',
    countryName: 'Thailand',
    countryCode: 'TH',
    languageName: 'English',
    languageCode: 'en',
  },
  {
    flag: 'TH',
    countryName: 'Thailand',
    countryCode: 'TH',
    languageName: 'ไทย',
    languageCode: 'th',
  },
];

const getLanguage = (countryCode, languageCode) => {
  const matchedLanguage = languages.find(
    item =>
      item.languageCode === languageCode && item.countryCode === countryCode,
  );
  return matchedLanguage;
};

export default languages;
export { getLanguage };
