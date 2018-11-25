import { testSnapshots } from '../../utils/test.util';

import { IntroductionScreen as Component } from './Introduction.screen';

describe('Modules/Introduction - Introduction screen', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        navigation: {
          navigate: jest.fn(),
        },
      },
    },
  ]);
});
