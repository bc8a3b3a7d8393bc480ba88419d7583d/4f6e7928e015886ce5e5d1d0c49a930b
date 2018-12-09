import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerItemList.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BannerItemList', module).add('no button', () => (
  <ScreenView>
    <Component
      onPress={() => console.log('on BannerItemList')}
      image="flight"
      title="Flights"
    />
  </ScreenView>
));
