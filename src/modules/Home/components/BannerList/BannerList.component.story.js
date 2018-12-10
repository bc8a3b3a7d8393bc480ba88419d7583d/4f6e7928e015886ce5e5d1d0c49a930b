import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './BannerList.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Home - BannerList', module).add('basic render', () => (
  <ScreenView>
    <Component
      data={[
        {
          sectionId: 'vi-best-flight-deal',
          sectionName: 'vi-best-flight-deal',
          title: 'Fly home for cheap this Tet Holiday',
          subtitle: 'Big savings on flights! Book now!',
          iconTitle: null,
          link: null,
          style: {
            properties: {
              visibleItems: '1.8',
              ratio: '3:4',
            },
            titleColor: '#000000',
            subtitleColor: '#696969',
            type: 'IMAGE_CAROUSEL',
          },
          attributes: {
            specialItemBack: 'false',
            specialItemFront: 'false',
            highlighted: 'false',
          },
          items: [
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
            {
              id:
                'traveloka://flight/search/one_way/0/DAD/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/DAD/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783824593-6639dc81ec97d8309915d5b1f475b61f.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
            {
              id:
                'traveloka://flight/search/one_way/0/SGN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/SGN/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783692952-6cd5699c5b98cd71d8b7a429cf61e04a.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
            {
              id:
                'traveloka://flight/search/one_way/0/CXR/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/CXR/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783837164-675f0484bb92a99bbceb95adc07a18df.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
            {
              id:
                'traveloka://flight/search/one_way/0/BKK/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/BKK/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783844147-113e0093539abc6d9fd9f25ad29c3184.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
            {
              id:
                'traveloka://flight/search/one_way/0/VII/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/VII/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783851606-fb7354fe8012e6431fe43d17a596e873.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
            {
              id:
                'traveloka://flight/search/one_way/0/HPH/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              type: 'default',
              link:
                'traveloka://flight/search/one_way/0/HPH/02-02-2019/1/0/0?utm_source=mainAppHomePage.mainAppHomePage&utm_medium=IMAGE_CAROUSEL',
              linkType: 'DEEPLINK',
              attributes: {
                title: null,
                ribbonText: null,
                iconImage: null,
                subtitle: null,
                backgroundImage:
                  'https://tvlk.imgix.net/imageResource/2018/10/29/1540783861349-f18e45182731d3c56cbcfb403514e3c3.jpeg?auto=compress%2Cformat&cs=srgb&fm=pjpg&ixlib=java-1.1.12&q=75',
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
          countdown: null,
        },
      ]}
    />
  </ScreenView>
));
