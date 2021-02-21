import { GET_USER_SUCCESS, userInitialState } from '../model/user';

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return action.user;
    }
    default:
      return state;
  }
};
