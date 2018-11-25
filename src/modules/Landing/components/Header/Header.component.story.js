import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Header.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Landing - Header', module)
  .add('Country: Viet Nam - Language: Vietnamese', () => (
    <ScreenView>
      <Component
        countryCode="VN"
        countryName="Viet Nam"
        languageCode="vi"
        languageName="Tiếng Việt"
      />
    </ScreenView>
  ))
  .add('Country: Singapore - Language: English', () => (
    <ScreenView>
      <Component
        countryCode="SG"
        countryName="Singapore"
        languageCode="en"
        languageName="English"
      />
    </ScreenView>
  ));
