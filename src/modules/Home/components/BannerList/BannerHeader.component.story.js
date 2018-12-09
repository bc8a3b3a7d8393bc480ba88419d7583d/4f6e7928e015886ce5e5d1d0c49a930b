import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerHeader.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BannerHeader', module).add('no button', () => (
  <ScreenView>
    <Component title="Flights" subTitle="Flight flight flight" />
  </ScreenView>
));
