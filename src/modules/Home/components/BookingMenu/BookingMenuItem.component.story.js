import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BookingMenuItem.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BookingMenuItem', module).add('no button', () => (
  <ScreenView>
    <Component
      onPress={() => console.log('on BookingMenuItem')}
      image="flight"
      title="Flights"
    />
  </ScreenView>
));
