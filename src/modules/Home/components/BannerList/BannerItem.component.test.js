import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BannerItem.component';

describe('Modules/Home - BannerItem', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        onPress: jest.fn(),
        title: 'Flights',
        image: 'flight',
      },
    },
  ]);
});
