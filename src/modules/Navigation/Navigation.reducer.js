import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from './navigators/AppNavigator.navigator';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
