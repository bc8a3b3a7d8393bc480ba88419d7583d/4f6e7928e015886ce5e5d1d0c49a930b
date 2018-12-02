import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BookingMenu.component';

describe('Modules/Home - BookingMenu', () => {
  const componentProps = {
    onPressFlight: jest.fn(),
  };

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);
});
