import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerItem.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

const data = {
  id:
    'traveloka://flight/search/one_way/0/HAN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
  type: 'default',
  link:
    'traveloka://flight/search/one_way/0/HAN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
  linkType: 'VIDEO',
  attributes: {
    title: 'See All Promos',
    ribbonText: null,
    iconImage:
      'https://tvlk.imgix.net/imageResource/2018/03/28/1522238393788-a1ea3b1b31fe85fe7e8d000f9e3c0ff3.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75',
    subtitle: null,
    backgroundImage:
      'https://tvlk.imgix.net/imageResource/2018/10/29/1540785749153-f3fe687a48f52ebc64a754c1b16b4457.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
    cornerLabelText: null,
  },
  style: {
    properties: {
      titleColor: '#1b1b1b',
      subtitleColor: '#8f8f8f',
      additionalTextColor: '#e91d1d',
    },
  },
};
const itemStyle = {
  properties: {
    visibleItems: '1.8',
    ratio: '3:4',
  },
  titleColor: '#000000',
  subtitleColor: '#696969',
  type: 'IMAGE_CAROUSEL',
};

storiesOf('Modules/Home - BannerItem', module).add('basic render', () => (
  <ScreenView>
    <Component
      data={data}
      isLastItem
      onPress={() => console.log('on press')}
      itemStyle={itemStyle}
    />
  </ScreenView>
));
