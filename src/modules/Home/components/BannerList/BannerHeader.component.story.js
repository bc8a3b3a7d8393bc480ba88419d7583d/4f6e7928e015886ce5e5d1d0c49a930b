import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerHeader.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BannerHeader', module).add('basic render', () => (
  <ScreenView>
    <Component
      title="Flights"
      subTitle="flight flight"
      titleColor="blue"
      subTitleColor="red"
    />
  </ScreenView>
));
