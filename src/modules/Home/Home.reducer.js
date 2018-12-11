import typeToReducer from 'type-to-reducer';
import { createActions } from 'redux-actions';
import data from './Home.data';

const actions = createActions('YOUR_ACTION');

const initialState = data;
const reducer = typeToReducer(
  {
    [actions.yourAction]: (state, action) => {
      return action.payload;
    },
  },
  initialState,
);

export { actions };
export default reducer;
