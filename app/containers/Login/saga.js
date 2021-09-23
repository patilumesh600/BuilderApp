// import { take, call, put, select } from 'redux-saga/effects';
import { all, takeLatest,call,put } from 'redux-saga/effects';
import { showAlert } from '../../alert';
import request from '../../utils/request';
import * as Constants from './constants';
import * as Actions from './actions';

export function* login(action) { 
  try {
    // eslint-disable-next-line no-unused-vars
    const options = {
      method: 'POST',
      data: {
        EmailAddress: action.loginName,
        Password:action.password,
      },
    };
    // const response = yield call(request, 'https://api.publicapis.org/entries', options);
    const newOptions=null;
    const response = yield call(request, 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/kickstarterc27b67e.json', newOptions);
    console.log(response);
    yield put(Actions.setLoginResponse(response));
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
