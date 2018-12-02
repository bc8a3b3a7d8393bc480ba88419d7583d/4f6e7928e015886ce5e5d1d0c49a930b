import { Routes } from '../../Navigation.constant';
import { translateWithNamespace } from '../../../../i18n';

const MainTabRoutes = Routes.MainTabNavigator;
const i18n = translateWithNamespace('navigation.mainTabNavigator');

export default [
  {
    route: MainTabRoutes.Home,
    title: i18n('home'),
    icon: 'home',
  },
  {
    route: MainTabRoutes.Saved,
    title: i18n('saved'),
    icon: 'home',
  },
  {
    route: MainTabRoutes.MyBooking,
    title: i18n('myBooking'),
    icon: 'booking',
  },
  {
    route: MainTabRoutes.MyInbox,
    title: i18n('myInbox'),
    icon: 'inbox',
  },
  {
    route: MainTabRoutes.MyAccount,
    title: i18n('myAccount'),
    icon: 'account',
  },
];
