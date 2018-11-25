import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Introduction.view';

storiesOf('Modules/Introduction - IntroductionView', module).add(
  'default',
  () => (
    <Component
      navigation={{
        navigate: () => console.log('navigate'),
      }}
    />
  ),
);
