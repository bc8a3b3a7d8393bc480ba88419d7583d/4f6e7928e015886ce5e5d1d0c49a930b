import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BookingMenuShortcut.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BookingMenuShortcut', module).add('no button', () => (
  <ScreenView>
    <Component />
  </ScreenView>
));
