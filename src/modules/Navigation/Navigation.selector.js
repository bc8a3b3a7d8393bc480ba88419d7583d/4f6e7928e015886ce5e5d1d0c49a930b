const getRoutes = state => {
  const { index, routes, routeName } = state;
  if (index === undefined) {
    return [routeName];
  }

  return !routeName
    ? getRoutes(routes[index])
    : [routeName, ...getRoutes(routes[index])];
};

const getCurrentRoute = nav => {
  let tmpNav = nav;
  const { index, routes } = tmpNav;
  if (routes && routes.length > 0) {
    tmpNav = getCurrentRoute(routes[index]);
  }

  return tmpNav;
};

export { getRoutes, getCurrentRoute };
