import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './IntroductionPage.component';

storiesOf('Modules/Landing - IntroductionPage', module).add('default', () => (
  <Component
    data={{
      title: 'title',
      text: 'text',
      image: 'page1',
    }}
    onPress={() => console.log('on press')}
  />
));
