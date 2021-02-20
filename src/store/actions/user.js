import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_USER_SUCCESS } from '../../model/user';

export function getUser() {
  return function (dispatch) {
    if (!AsyncStorage.getItem('token')) {
      return dispatch({ type: GET_USER_SUCCESS, user: {} });
    }
    return dispatch({
      type: GET_USER_SUCCESS,
      user: { email: 'test@test.tt' }, // TODO
    });
  };
}
