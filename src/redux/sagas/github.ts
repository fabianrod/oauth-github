import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchGithubSucceed, fetchGithubFailure } from '../actions/github';
import Types from '../types/github';
import getRepositories from '../../api/github.api';

function* handleFetchGithub(action: any) {
  try {
    const githubRepos = yield call(getRepositories, action.username);
    yield put(fetchGithubSucceed(githubRepos));
  } catch (e) {
    yield put(fetchGithubFailure(e));
  }
}

function* githubSaga() {
  yield takeLatest(Types.FETCH_GITHUB_REQUEST, handleFetchGithub);
}

export default githubSaga;