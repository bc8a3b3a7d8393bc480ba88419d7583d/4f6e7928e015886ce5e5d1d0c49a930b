import { testSnapshots } from '../../../../utils/test.util';

import Component from './Landing.view';

describe('Modules/Landing - Landing View', () => {
  const componentProps = {
    onSelectLanguage: jest.fn(),
    selectedLanguage: {
      languageCode: 'vi',
      languageName: 'Tiếng Việt',
      countryCode: 'VN',
      countryName: 'Việt Nam',
    },
  };

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);
});
