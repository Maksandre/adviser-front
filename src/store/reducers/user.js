import { GET_USER_SUCCESS, userInitialState } from '../../model/user';

export default function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return action.user;
    }
    default:
      return state;
  }
}
