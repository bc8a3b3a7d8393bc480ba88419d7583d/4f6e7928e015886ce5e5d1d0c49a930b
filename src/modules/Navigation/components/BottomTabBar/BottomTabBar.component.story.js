import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BottomTabBar.component';

storiesOf('Navigation/Component - BottomTabBar', module).add('default', () => (
  <Component
    navigation={{
      navigate: () => console.log('navigate button'),
    }}
  />
));
