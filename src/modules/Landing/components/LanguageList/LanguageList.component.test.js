import { testSnapshots } from '../../../../utils/test.utils';

import Component from './LanguageList.component';

describe('Modules/Landing - Language List', () => {
  const componentProps = {
    onSelectLanguage: jest.fn(),
    countryCode: 'VN',
    languageCode: 'vi',
  };

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);
});
