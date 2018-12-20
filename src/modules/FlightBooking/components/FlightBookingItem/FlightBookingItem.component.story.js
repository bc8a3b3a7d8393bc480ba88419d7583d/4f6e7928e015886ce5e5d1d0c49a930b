import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './FlightBookingItem.component';

storiesOf('Modules/Landing - FlightBookingItem', module).add('default', () => (
  <Component onPress={() => console.log('pressed continue button')} />
));
