import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerItem.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BannerItem', module).add('no button', () => (
  <ScreenView>
    <Component
      onPress={() => console.log('on BannerItem')}
      image="flight"
      title="Flights"
    />
  </ScreenView>
));
