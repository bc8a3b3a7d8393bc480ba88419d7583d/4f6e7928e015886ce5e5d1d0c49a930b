import { testSnapshots } from '../../utils/test.utils';

import Component from './ScreenView.component';

describe('Component - Button', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
    },
  ]);
});
