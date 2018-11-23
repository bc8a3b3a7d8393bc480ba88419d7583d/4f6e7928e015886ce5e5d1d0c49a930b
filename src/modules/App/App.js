import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../../redux/createStore';
import AppWithNavigationState from './AppWithNavigationState';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store} persistor={persistor}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
