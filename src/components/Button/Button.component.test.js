import { testSnapshots } from '../../utils/test.utils';

import Component from './Button.component';

describe('Component - Button', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        title: 'Button',
        onPress: jest.fn(),
      },
    },
  ]);
});
