import React from 'react';

import { COLORS } from '../../themes';
import { defaultHeaderStyle, defaultTitleStyle } from './Navigation.styles';
import HeaderBackButton from './components/Header/HeaderBack/HeaderBack.component';

const stackOptions = (extraOptions = {}) => ({
  headerLeft: <HeaderBackButton />,
  headerStyle: defaultHeaderStyle,
  headerTintColor: COLORS.white,
  headerTitleStyle: defaultTitleStyle,
  ...extraOptions,
});

// eslint-disable-next-line import/prefer-default-export
export { stackOptions };
