import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import { NavigationBar as Component } from './NavigationBar.component';

storiesOf('Navigation/Component - NavigationBar', module).add('default', () => (
  <Component
    navigation={{
      goBack: () => console.log('go back'),
    }}
  />
));
