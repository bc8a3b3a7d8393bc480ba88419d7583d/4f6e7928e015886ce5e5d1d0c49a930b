import typeToReducer from 'type-to-reducer';
import { createActions } from 'redux-actions';

import { getLanguage } from '../Landing/components/LanguageList/Language.data';

const actions = createActions('SET_LANGUAGE');

const initialState = getLanguage('VN', 'en');
const reducer = typeToReducer(
  {
    [actions.setLanguage]: (state, action) => {
      return action.payload;
    },
  },
  initialState,
);

export { actions };
export default reducer;
