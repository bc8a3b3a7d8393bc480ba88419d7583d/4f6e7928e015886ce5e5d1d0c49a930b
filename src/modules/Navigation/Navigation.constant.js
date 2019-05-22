import keyMirror from 'key-mirror-nested';

const Routes = keyMirror({
  RootNavigator: null,
  AuthNavigator: {
    Landing: null,
    Introduction: null,
    Login: null,
  },
  MainTabNavigator: {
    Navigator: null,
    Home: null,
    Saved: null,
    MyBooking: null,
    MyInbox: null,
    MyAccount: null,
  },
  HomeNavigator: {
    Home: null,
    FlightBooking: null,
    AirportList: null,
  },
});

export default {
  Routes,
};

export { Routes };
