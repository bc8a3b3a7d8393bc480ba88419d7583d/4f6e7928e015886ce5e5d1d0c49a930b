import { combineReducers } from 'redux';

import language from '../modules/Language/Language.reducer';
import navigation from '../modules/Navigation/Navigation.reducer';
import home from '../modules/Home/Home.reducer';

const reducer = combineReducers({
  language,
  navigation,
  home,
});

export default reducer;
