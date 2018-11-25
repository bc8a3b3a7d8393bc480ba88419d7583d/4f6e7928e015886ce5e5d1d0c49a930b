import { testSnapshots } from '../../../utils/test.util';

import Component from './Introduction.view';

describe('Modules/Landing - Introduction view', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
    },
  ]);
});
