import { testSnapshots } from '../../../../utils/test.utils';

import Component from './Footer.component';

describe('Modules/Landing - Footer', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        onPress: jest.fn(),
      },
    },
  ]);
});
