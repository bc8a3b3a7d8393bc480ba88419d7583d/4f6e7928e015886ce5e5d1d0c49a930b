import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './IntroductionPage.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Introduction - IntroductionPage', module)
  .add('no button', () => (
    <ScreenView>
      <Component
        data={{
          title: 'title',
          text: 'text',
          image: 'page1',
        }}
      />
    </ScreenView>
  ))
  .add('with button', () => (
    <ScreenView>
      <Component
        data={{
          title: 'title',
          text: 'text',
          image: 'page1',
          button: {
            title: 'button title',
          },
        }}
        onPress={() => console.log('on press')}
      />
    </ScreenView>
  ));
