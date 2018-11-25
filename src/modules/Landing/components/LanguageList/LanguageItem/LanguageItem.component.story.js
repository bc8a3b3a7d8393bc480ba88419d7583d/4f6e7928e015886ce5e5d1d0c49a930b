import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './LanguageItem.component';
import ScreenView from '../../../../../components/ScreenView/ScreenView.component';

storiesOf('Modules/Landing - Language Item', module)
  .add('default', () => (
    <ScreenView>
      <Component
        selected={false}
        countryCode="VN"
        countryName="Việt Nam"
        languageCode="vi"
        languageName="Tiếng Việt"
      />
    </ScreenView>
  ))
  .add('selected', () => (
    <ScreenView>
      <Component
        selected
        countryCode="VN"
        countryName="Việt Nam"
        languageCode="vi"
        languageName="Tiếng Việt"
      />
    </ScreenView>
  ));
