const RoutesShouldShowTabBar = [];

const showShowTabBarWithRoute = routeName =>
  RoutesShouldShowTabBar.indexOf(routeName) >= 0;

export { RoutesShouldShowTabBar, showShowTabBarWithRoute };
