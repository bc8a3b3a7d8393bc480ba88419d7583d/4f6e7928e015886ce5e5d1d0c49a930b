import { testSnapshots } from '../../../../utils/test.utils';

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
