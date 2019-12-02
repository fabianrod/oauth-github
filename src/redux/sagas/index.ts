import { all } from 'redux-saga/effects';
import githubSaga from './github';

export default function* rootSagas() {
  yield all([
    githubSaga(),
  ]);
}