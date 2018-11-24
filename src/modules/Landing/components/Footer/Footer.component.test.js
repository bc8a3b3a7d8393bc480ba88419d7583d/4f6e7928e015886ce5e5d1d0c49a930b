import { testSnapshots } from '../../../../utils/test.util';

import Component from './Footer.component';

describe('Modules/Landing - Footer', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {},
    },
  ]);
});
