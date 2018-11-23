import typeToReducer from 'type-to-reducer';

import I18n from '../../i18n';

import actions from './Language.actions';

const initialState = I18n.currentLocale();
const reducer = typeToReducer(
  {
    [actions.setLanguage]: (state, action) => action.payload,
  },
  initialState,
);

export { actions };
export default reducer;
