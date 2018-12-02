import React from 'react';
import { View } from 'react-native';
import { testSnapshots } from '../../../../../utils/test.utils';

import { HeaderButton } from './HeaderButton.component';

const props = {
  navigation: {
    goBack: jest.fn(),
    onPress: jest.fn(),
  },
};

describe('HeaderButton', () => {
  testSnapshots(HeaderButton, [
    {
      props: {
        ...props,
        children: <View />,
      },
      description: 'basic render',
    },
  ]);
});
