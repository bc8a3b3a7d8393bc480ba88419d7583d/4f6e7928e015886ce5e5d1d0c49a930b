import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Landing.view';

storiesOf('Modules/Landing - Landing View', module).add('default', () => (
  <Component
    onSelectLanguage={() => 'Selected language'}
    selectedLanguage={{
      languageCode: 'vi',
      languageName: 'Tiếng Việt',
      countryCode: 'VN',
      countryName: 'Việt Nam',
    }}
  />
));
