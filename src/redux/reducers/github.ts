import Types from '../types/github';

const initialState = {
  data: [],
};

export default function (state: any = initialState, action: any) {
  switch (action.type) {
    case Types.FETCH_GITHUB_REQUEST:
      return {
        ...state,
        username: action.username,
      };
    case Types.FETCH_GITHUB_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_GITHUB_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}