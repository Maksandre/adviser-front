import { BEGIN_API_CALL, API_CALL_FAIL } from '../constants/apiCalls';

const apiStatusInitialState = 0;

export const apiStatusReducer = (state = apiStatusInitialState, action) => {
  if (action.type === BEGIN_API_CALL) {
    console.log('+1 - total:', state + 1);
    return state + 1;
  }
  if (action.type.endsWith('_SUCCESS') || action.type === API_CALL_FAIL) {
    console.log('-1 - total:', state - 1);

    return state - 1;
  }
  return state;
};
