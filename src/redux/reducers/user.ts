import Types from '../types/user';

const initialState = {
  data: [],
};

export default function (state: any = initialState, action: any) {
  switch (action.type) {
    case Types.FETCH_USER_REQUEST:
      return {
        ...state,
      };
    case Types.FETCH_USER_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_USER_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}