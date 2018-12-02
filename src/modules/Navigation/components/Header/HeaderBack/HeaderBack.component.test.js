import { testSnapshots } from '../../../../../utils/test.utils';

import { HeaderBack } from './HeaderBack.component';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

describe('HeaderBack', () => {
  testSnapshots(HeaderBack, [
    {
      props,
      description: 'basic render',
    },
  ]);
});
