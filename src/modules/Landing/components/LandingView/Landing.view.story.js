import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Landing.view';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Landing - Landing View', module).add('default', () => (
  <ScreenView>
    <Component
      onSelectLanguage={() => 'Selected language'}
      selectedLanguage={{
        languageCode: 'vi',
        languageName: 'Tiếng Việt',
        countryCode: 'VN',
        countryName: 'Việt Nam',
      }}
    />
  </ScreenView>
));
