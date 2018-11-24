import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import AppNavigator from '../Navigation/navigators/AppNavigator.navigator';
import { Routes } from '../Navigation/Navigation.constant';
import { setAppLanguage } from '../../i18n';

const navContainer = createAppContainer(AppNavigator);
const AppWithNavigation = reduxifyNavigator(navContainer, Routes.RootNavigator);

const WrapperNavigator = props => <AppWithNavigation {...props} />;

const mapStateToProps = state => {
  setAppLanguage(state.language.languageCode);
  return {
    state: state.navigation,
  };
};

const AppWithNavigationState = connect(mapStateToProps)(WrapperNavigator);

export default AppWithNavigationState;
