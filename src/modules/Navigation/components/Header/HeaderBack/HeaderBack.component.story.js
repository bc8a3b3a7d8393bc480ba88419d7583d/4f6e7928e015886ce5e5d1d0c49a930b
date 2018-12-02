import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import { HeaderBack as Component } from './HeaderBack.component';

storiesOf('Navigation/Component - HeaderBack', module).add('default', () => (
  <Component
    navigation={{
      goBack: () => console.log('go back'),
    }}
  />
));
