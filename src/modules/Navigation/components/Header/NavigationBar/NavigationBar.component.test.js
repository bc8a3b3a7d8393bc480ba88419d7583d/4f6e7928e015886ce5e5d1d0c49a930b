import React from 'react';
import { View } from 'react-native';
import { testSnapshots } from '../../../../../utils/test.utils';

import NavigationBar from './NavigationBar.component';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
  onPress: jest.fn(),
};

describe('NavigationBar', () => {
  testSnapshots(NavigationBar, [
    {
      props: {
        ...props,
        children: <View />,
      },
      description: 'basic render',
    },
    {
      props: {
        ...props,
        isRightButton: true,
        children: <View />,
      },
      description: 'render right button',
    },
  ]);
});
