import React from 'react';
import { shallow } from 'enzyme';

import { testSnapshots } from '../../../../utils/test.utils';

import Component from './BannerItem.component';

describe('Modules/Home - BannerItem', () => {
  const componentProps = {
    isLastItem: true,
    onPress: jest.fn(),
    data: {
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
    },
    itemStyle: {
      properties: {
        visibleItems: '1.8',
        ratio: '3:4',
      },
      titleColor: '#000000',
      subtitleColor: '#696969',
      type: 'IMAGE_CAROUSEL',
    },
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
    {
      description: 'default number of column is 1',
      props: {
        ...componentProps,
        itemStyle: {
          ...componentProps.itemStyle,
          type: 'FULL_BANNER',
        },
      },
    },
    {
      description: 'should render full banner section',
      props: {
        ...componentProps,
        itemStyle: {
          ...componentProps.itemStyle,
          properties: {
            ratio: componentProps.itemStyle.properties.ratio,
          },
        },
      },
    },
  ]);

  test('check render grid item', () => {
    const wrapper = render({
      ...componentProps,
      itemStyle: {
        properties: {
          visibleItems: '2.5',
          ratio: '1:1',
          columns: '3',
        },
        titleColor: '#000000',
        subtitleColor: '#696969',
        type: 'GRID',
      },
      data: {
        id:
          'traveloka://cms/viewDescription/guidelines/transfer?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=GRID',
        type: 'default',
        link:
          'traveloka://cms/viewDescription/guidelines/transfer?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=GRID',
        linkType: 'DEEPLINK',
        attributes: {
          title: null,
          ribbonText: null,
          iconImage: null,
          subtitle: null,
          backgroundImage:
            'https://tvlk.imgix.net/imageResource/2018/11/29/1543491168198-a6155734ddedef7ec6c4c230e5386bb5.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75',
          cornerLabelText: null,
        },
        style: {
          properties: {
            titleColor: '#000000',
            subtitleColor: '#000000',
            textPlacement: 'OUTSIDE',
            textHorizontalAlignment: 'LEFT',
            textVerticalAlignment: 'BOTTOM',
            overlay: true,
            titleType: 'TYPE_1',
          },
        },
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
