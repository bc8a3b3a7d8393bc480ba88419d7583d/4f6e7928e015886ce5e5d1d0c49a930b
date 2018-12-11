import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import { HeaderButton as Component } from './HeaderButton.component';

storiesOf('Navigation/Component - HeaderButton', module).add('default', () => (
  <Component
    navigation={{
      goBack: () => console.log('go back'),
    }}
  />
));
