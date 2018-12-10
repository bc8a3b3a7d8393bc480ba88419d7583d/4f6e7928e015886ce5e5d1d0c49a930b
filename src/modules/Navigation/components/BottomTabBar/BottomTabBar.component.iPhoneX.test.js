import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BottomTabBar.component';

jest.mock('react-native-device-info', () => ({
  getModel: () => 'iPhone X',
}));

describe('Navigation/Component - BottomTabBar', () => {
  const componentProps = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  testSnapshots(Component, [
    {
      description: 'basic render in iPhone X',
      props: componentProps,
    },
  ]);
});
