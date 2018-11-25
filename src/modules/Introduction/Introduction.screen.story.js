import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Introduction.screen';

storiesOf('Modules/Introduction - Introduction Screen', module).add(
  'default',
  () => (
    <Component
      navigation={{
        navigate: () => console.log('navigate'),
      }}
    />
  ),
);
