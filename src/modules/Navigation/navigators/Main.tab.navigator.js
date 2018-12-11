import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { Routes } from '../Navigation.constant';
import HomeNavigator from './Home.stack.navigator';
import BottomTabBar from '../components/BottomTabBar/BottomTabBar.component';

const MainTabRoutes = Routes.MainTabNavigator;

const MainTabNavigator = createBottomTabNavigator(
  {
    [MainTabRoutes.Home]: HomeNavigator,
  },
  {
    tabBarComponent: ({ navigation }) => (
      <BottomTabBar navigation={navigation} />
    ),
  },
);

export default createAppContainer(MainTabNavigator);
