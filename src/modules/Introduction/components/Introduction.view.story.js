import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Introduction.view';

storiesOf('Modules/Landing - IntroductionView', module).add('default', () => (
  <Component />
));
