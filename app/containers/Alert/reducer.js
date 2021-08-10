/*
 *
 * Alert reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_MESSAGE,
  REMOVE_MESSAGE,
} from './constants';

const initialState = fromJS({
  messages: {},
});

function alertReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ADD_MESSAGE:
      return state.setIn(['messages', 0], fromJS(action.message));
    case REMOVE_MESSAGE:
      return state.deleteIn(['messages', 0]);
    default:
      return state;
  }
}

export default alertReducer;
