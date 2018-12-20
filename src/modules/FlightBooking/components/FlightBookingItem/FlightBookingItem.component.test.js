import { testSnapshots } from '../../../../utils/test.utils';

import Component from './FlightBookingItem.component';

describe('Modules/Landing - FlightBookingItem', () => {
  testSnapshots(Component, [
    {
      description: 'basic render',
      props: {
        onPress: jest.fn(),
      },
    },
  ]);
});
