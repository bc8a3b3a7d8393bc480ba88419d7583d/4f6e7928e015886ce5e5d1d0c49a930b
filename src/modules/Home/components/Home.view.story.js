import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import Component from './Home.view';
import ScreenView from '../../../components/ScreenView/ScreenView.component';
import data from '../Home.data';

storiesOf('Modules/Home - Home view', module).add('render home', () => (
  <ScreenView>
    <Component data={data} />
  </ScreenView>
));
