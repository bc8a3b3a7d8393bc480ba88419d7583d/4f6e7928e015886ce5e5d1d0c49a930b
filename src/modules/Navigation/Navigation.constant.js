import keyMirror from 'key-mirror-nested';

const Routes = keyMirror({
  RootNavigator: null,
  Authentication: {
    Landing: null,
    Login: null,
    Home: null,
  },
});

export default {
  Routes,
};

export { Routes };
