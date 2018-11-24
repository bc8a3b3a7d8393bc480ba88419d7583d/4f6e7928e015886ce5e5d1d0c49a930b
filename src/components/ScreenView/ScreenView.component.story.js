import React from 'react';
import { Text } from 'react-native';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './ScreenView.component';

storiesOf('Component - ScreenView', module).add('default', () => (
  <Component
    style={{
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Text>Screen view component</Text>
  </Component>
));
