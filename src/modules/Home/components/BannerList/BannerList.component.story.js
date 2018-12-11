import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerList.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';
import data from '../../Home.data';

storiesOf('Modules/Home - BannerList', module).add('basic render', () => (
  <ScreenView>
    <Component data={data} />
  </ScreenView>
));
