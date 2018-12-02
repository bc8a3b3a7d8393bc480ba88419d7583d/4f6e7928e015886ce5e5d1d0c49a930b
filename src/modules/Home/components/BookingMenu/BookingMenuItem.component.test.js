import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BookingMenuItem.component';

describe('Modules/Home - BookingMenuItem', () => {
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
