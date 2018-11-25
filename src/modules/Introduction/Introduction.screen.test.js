import { testSnapshots } from '../../utils/test.util';

import { IntroductionScreen as Component } from './Introduction.screen';

describe('Modules/Landing - Introduction screen', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
    },
  ]);
});
