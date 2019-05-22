import { createStackNavigator } from 'react-navigation';

import { Routes } from '../Navigation.constant';
import Screens from '../Navigation.screen';
import { stackOptions } from '../Navigation.option';

const HomeRoutes = Routes.HomeNavigator;

const HomeNavigator = createStackNavigator(
  {
    [HomeRoutes.Home]: Screens.Home,
    [HomeRoutes.FlightBooking]: Screens.FlightBooking,
    [HomeRoutes.AirportList]: Screens.AirportList,
  },
  {
    initialRouteName: HomeRoutes.AirportList,
    defaultNavigationOptions: stackOptions(),
  },
);

export default HomeNavigator;
