// import { take, call, put, select } from 'redux-saga/effects';
import { all, takeLatest,call,put } from 'redux-saga/effects';
import { showAlert } from '../../alert';
import request from '../../utils/request';
import * as Constants from './constants';

export function* login(action) { 
  try {
    const options = {
      method: 'POST',
      data: {
        EmailAddress: action.loginName,
        Password:action.password,
      },
    };
    const response = yield call(request, 'https://api.publicapis.org/entries', options);
    console.log(response);
    // yield put(setUsernameExists(response.IsExist === 'True' ? 'email' : 'not found'));
  } catch (err) {
    yield put(showAlert(err.message));
  }
}

// Individual exports for testing
export default function* loginSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    yield takeLatest(Constants.LOGIN, login),
  ]);
}
