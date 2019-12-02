import Types from '../types/github';

const fetchGithubRequest = (username: string) => ({
  type: Types.FETCH_GITHUB_REQUEST,
  username,
});

const fetchGithubSucceed = (payload: any) => ({
  type: Types.FETCH_GITHUB_SUCCEED,
  payload,
});

const fetchGithubFailure = (error: any) => ({
  type: Types.FETCH_GITHUB_FAILURE,
  error,
});

export {
  fetchGithubRequest,
  fetchGithubSucceed,
  fetchGithubFailure,
};