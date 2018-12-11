import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './TabButton.component';

storiesOf('Navigation/Component - TabButton', module)
  .add('default', () => (
    <Component
      title="Tab bar item"
      onPress={() => console.log('pressed button')}
      route="route"
    />
  ))
  .add('selected', () => (
    <Component
      title="Tab bar item"
      onPress={() => console.log('pressed button')}
      route="route"
      selected
    />
  ));
