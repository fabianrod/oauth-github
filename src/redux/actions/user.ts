import Types from '../types/user';

const fetchUserRequest = () => ({
  type: Types.FETCH_USER_REQUEST,
});

const fetchUserSucceed = (payload: any) => ({
  type: Types.FETCH_USER_SUCCEED,
  payload,
});

const fetchUserFailure = (error: any) => ({
  type: Types.FETCH_USER_FAILURE,
  error,
});

export {
  fetchUserRequest,
  fetchUserSucceed,
  fetchUserFailure,
};