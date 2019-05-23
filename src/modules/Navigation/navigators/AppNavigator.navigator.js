import { createSwitchNavigator } from 'react-navigation';

import { Routes } from '../Navigation.constant';
import Screens from '../Navigation.screen';
import MainTabNavigator from './Main.tab.navigator';

const AuthenticationRoutes = Routes.AuthNavigator;

const AppNavigator = createSwitchNavigator(
  {
    [AuthenticationRoutes.Landing]: Screens.Landing,
    [AuthenticationRoutes.Introduction]: Screens.Introduction,
    [Routes.MainTabNavigator.Navigator]: MainTabNavigator,
  },
  {
    initialRouteName: AuthenticationRoutes.Landing,
  },
);

export default AppNavigator;
