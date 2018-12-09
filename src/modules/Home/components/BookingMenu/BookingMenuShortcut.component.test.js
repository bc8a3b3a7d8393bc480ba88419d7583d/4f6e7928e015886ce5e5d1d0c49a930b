import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BookingMenuShortcut.component';

describe('Modules/Home - BookingMenuShortcut', () => {
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
