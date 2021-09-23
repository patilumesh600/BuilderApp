/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
// import { DEFAULT_ACTION } from './constants';
import * as Constants from './constants';

export const initialState = {
  loginData:[],
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case Constants.DEFAULT_ACTION:        
        break;
      case Constants.LOGIN_RES:
        draft.loginData = action.loginData;
        break;
    }
  });

export default loginReducer;
