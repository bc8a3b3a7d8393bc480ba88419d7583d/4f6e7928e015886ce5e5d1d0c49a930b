import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { Routes } from './Navigation.constant';

const middleware = createReactNavigationReduxMiddleware(
  Routes.RootNavigator,
  state => state.nav,
);

export default middleware;
