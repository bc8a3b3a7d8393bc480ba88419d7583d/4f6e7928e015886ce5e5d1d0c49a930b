import { testSnapshots } from '../../../../utils/test.util';

import Component from './Header.component';

describe('Modules/Landing - Header', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        languageCode: 'en',
        languageName: 'English',
        countryCode: 'VN',
        countryName: 'Viet Nam',
      },
    },
  ]);
});
