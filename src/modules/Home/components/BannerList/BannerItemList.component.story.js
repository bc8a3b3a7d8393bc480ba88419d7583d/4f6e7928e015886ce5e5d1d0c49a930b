import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerItemList.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';
import data from '../../Home.data';

const itemStyle = {
  properties: {
    visibleItems: '1.8',
    ratio: '3:4',
    background:
      'https://tvlk.imgix.net/imageResource/2018/08/31/1535716635325-9e081df7c965034b019030619a183e2a.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75',
  },
  titleColor: '#000000',
  subtitleColor: '#696969',
  type: 'IMAGE_CAROUSEL',
};

storiesOf('Modules/Home - BannerItemList', module).add('basic render', () => (
  <ScreenView>
    <Component
      onPress={() => console.log('on BannerItemList')}
      title="Flights"
      subTitle="flight"
      itemStyle={itemStyle}
      data={data[3].items}
    />
  </ScreenView>
));
