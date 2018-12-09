import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BannerHeader.component';

describe('Modules/Home - BannerHeader', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        title: 'Flights',
        subTitle: 'flight flight',
        titleColor: 'blue',
        subTitleColor: 'red',
      },
    },
  ]);
});
