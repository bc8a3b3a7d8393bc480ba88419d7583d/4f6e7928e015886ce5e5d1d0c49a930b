import { AppRegistry } from 'react-native';

import App from './modules/App/App';
import { name as appName } from '../app.json';
import { isDEV } from './utils/platform.util';

if (isDEV()) {
  // eslint-disable-next-line global-require
  require('./configs/reactotron.config');
}

AppRegistry.registerComponent(appName, () => App);
