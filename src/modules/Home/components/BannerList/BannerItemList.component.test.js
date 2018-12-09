import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BannerItemList.component';

describe('Modules/Home - BannerItemList', () => {
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
