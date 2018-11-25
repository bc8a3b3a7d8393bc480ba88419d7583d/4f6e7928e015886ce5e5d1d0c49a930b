import { createSwitchNavigator } from 'react-navigation';

import { Routes } from '../Navigation.constant';
import Screens from '../Navigation.screen';

const AuthenticationRoutes = Routes.Authentication;

const AppNavigator = createSwitchNavigator(
  {
    [AuthenticationRoutes.Landing]: Screens.Landing,
    [AuthenticationRoutes.Introduction]: Screens.Introduction,
  },
  {
    initialRouteName: AuthenticationRoutes.Introduction,
  },
);

export default AppNavigator;
