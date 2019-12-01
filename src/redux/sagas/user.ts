import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserSucceed, fetchUserFailure } from '../actions/user';
import Types from '../types/user';
import getUser from '../../api/user.api';

function* handleFetchUser() {
  try {
    const userData = yield call(getUser);
    yield put(fetchUserSucceed(userData));
  } catch (e) {
    yield put(fetchUserFailure(e));
  }
}

function* userSaga() {
  yield takeLatest(Types.FETCH_USER_REQUEST, handleFetchUser);
}

export default userSaga;