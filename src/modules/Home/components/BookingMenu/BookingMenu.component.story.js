import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BookingMenu.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BookingMenu', module).add('basic render', () => (
  <ScreenView>
    <Component onPressFlight={() => console.log('on BookingMenu')} />
  </ScreenView>
));
