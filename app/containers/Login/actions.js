/*
 *
 * Login actions
 *
 */

// import { DEFAULT_ACTION } from './constants';
import * as Constants from './constants';

export function defaultAction() {
  return {
    type: Constants.DEFAULT_ACTION,
  };
}

export function login(loginName, password) {
  return {
    type: Constants.LOGIN,
    loginName,
    password,   
  };
}

export function setLoginResponse(loginData) {
  return {
    type: Constants.LOGIN_RES,
    loginData,  
  };
}
