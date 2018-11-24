import { testSnapshots } from '../../utils/test.util';

import Component from './ScreenView.component';

describe('Component - Button', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
    },
  ]);
});
