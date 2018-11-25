import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Button.component';

storiesOf('Component - Button', module).add('default', () => (
  <Component title="Button" onPress={() => console.log('pressed button')} />
));
