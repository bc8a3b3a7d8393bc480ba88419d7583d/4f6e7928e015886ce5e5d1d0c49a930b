import { combineReducers } from 'redux';

import language from '../modules/Language/Language.reducer';
import navigation from '../modules/Navigation/Navigation.reducer';

const reducer = combineReducers({
  language,
  navigation,
});

export default reducer;
