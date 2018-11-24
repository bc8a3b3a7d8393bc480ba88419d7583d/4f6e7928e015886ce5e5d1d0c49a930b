import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './LanguageList.component';
import ScreenView from '../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Landing - Language List', module)
  .add('selected language: "Vietnamese" and country: "Viet Nam"', () => (
    <ScreenView>
      <Component
        onSelectLanguage={() => console.log('select language')}
        countryCode="VN"
        languageCode="vi"
      />
    </ScreenView>
  ))
  .add('selected language: "English" and country: "Singapore"', () => (
    <ScreenView>
      <Component
        onSelectLanguage={() => console.log('select language')}
        countryCode="SG"
        languageCode="en"
      />
    </ScreenView>
  ));
