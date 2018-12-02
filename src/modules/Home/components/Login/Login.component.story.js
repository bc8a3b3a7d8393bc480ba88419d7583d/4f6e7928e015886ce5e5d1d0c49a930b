import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Login.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - Login', module).add('no button', () => (
  <ScreenView>
    <Component onPress={() => console.log('on login')} />
  </ScreenView>
));
