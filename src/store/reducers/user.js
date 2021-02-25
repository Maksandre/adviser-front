import { GET_USER_SUCCESS } from '../constants/user';

const userInitialState = null;

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return action.user;
    }
    default:
      return state;
  }
};
