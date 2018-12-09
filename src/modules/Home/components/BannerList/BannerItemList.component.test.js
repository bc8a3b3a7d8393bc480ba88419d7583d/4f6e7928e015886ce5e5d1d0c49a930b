import React from 'react';
import { shallow } from 'enzyme';

import Component from './BannerItemList.component';
import { testSnapshots } from '../../../../utils/test.utils';

describe('Modules/Home - BannerItemList', () => {
  const componentProps = {
    onPress: jest.fn(),
    title: 'Flights',
    subTitle: 'flight',
    itemStyle: {
      properties: {
        visibleItems: '1.8',
        ratio: '3:4',
        background:
          'https://tvlk.imgix.net/imageResource/2018/08/31/1535716635325-9e081df7c965034b019030619a183e2a.png?auto=compress%2Cformat&cs=srgb&fm=png&ixlib=java-1.1.12&q=75',
      },
      titleColor: '#000000',
      subtitleColor: '#696969',
      type: 'IMAGE_CAROUSEL',
    },
    data: [
      {
        id:
          'traveloka://flight/search/one_way/0/HAN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
        type: 'default',
        link:
          'traveloka://flight/search/one_way/0/HAN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
        linkType: 'DEEPLINK',
        attributes: {
          title: null,
          ribbonText: null,
          iconImage: null,
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
    ],
  };

  const render = props => shallow(<Component {...props} />);

  testSnapshots(Component, [
    {
      description: 'basic render',
      props: componentProps,
    },
  ]);

  test('render grid list', () => {
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
      data: [
        {
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
      ],
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('check render banner item', () => {
    const wrapper = render(componentProps);
    const instance = wrapper.instance();

    const onPressFn = instance.onPress;
    const mockedOnPressFn = jest.fn();
    instance.onPress = mockedOnPressFn;

    const item = componentProps.data[0];
    const bannerItemListComponent = instance.renderItem({
      item,
      index: 0,
    });

    expect(bannerItemListComponent.props).toEqual({
      isLastItem: true,
      itemStyle: componentProps.itemStyle,
      data: item,
      containerStyle: {},
      onPress: mockedOnPressFn,
    });

    instance.onPress = onPressFn;
  });

  test('check key extractor of flat list', () => {
    const wrapper = render(componentProps);
    const instance = wrapper.instance();
    const item = componentProps.data[0];
    const result = instance.keyExtractor(item);

    expect(result).toEqual(item.id);
  });
});
