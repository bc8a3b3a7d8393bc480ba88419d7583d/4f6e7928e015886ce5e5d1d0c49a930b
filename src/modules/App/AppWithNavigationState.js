import React from 'react';
import { connect } from 'react-redux';
import { createNavigationContainer } from 'react-navigation';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import AppNavigator from '../Navigation/navigators/AppNavigator.navigator';
import { Routes } from '../Navigation/Navigation.constant';

const navContainer = createNavigationContainer(AppNavigator);
const AppWithNavigation = reduxifyNavigator(navContainer, Routes.RootNavigator);

const WrapperNavigator = props => <AppWithNavigation {...props} />;

const mapStateToProps = state => ({
  state: state.navigation,
});

const AppWithNavigationState = connect(mapStateToProps)(WrapperNavigator);

export default AppWithNavigationState;
