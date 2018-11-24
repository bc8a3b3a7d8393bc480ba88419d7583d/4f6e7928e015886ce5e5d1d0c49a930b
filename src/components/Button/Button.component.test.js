import { testSnapshots } from '../../utils/test.util';

import Component from './Button.component';

describe('Component - Button', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        title: 'Button',
      },
    },
  ]);
});