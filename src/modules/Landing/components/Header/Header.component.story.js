import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Header.component';

storiesOf('Modules/Landing - Header', module)
  .add('Country: Viet Nam - Language: Vietnamese', () => (
    <Component
      countryCode="VN"
      countryName="Viet Nam"
      languageCode="vi"
      languageName="Tiếng Việt"
    />
  ))
  .add('Country: Singapore - Language: English', () => (
    <Component
      countryCode="SG"
      countryName="Singapore"
      languageCode="en"
      languageName="English"
    />
  ));
