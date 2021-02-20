import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_USER_SUCCESS } from '../../model/user';

export function getUser() {
  return function (dispatch) {
    return AsyncStorage.getItem('token')
      .then((token) => {
        if (!token) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: null,
          });
        } else {
          console.log(token);
          dispatch({
            type: GET_USER_SUCCESS,
            user: { email: token },
          });
        }
      })
      .catch((err) => console.log('Error: ', err));
  };
}

export function loginUser() {
  return function (dispatch) {
    return AsyncStorage.setItem('token', 'test@test.tt').then((token) => {
      console.log('LOGOUT');
      dispatch({ type: GET_USER_SUCCESS, user: { email: token } });
    });
  };
}

export function logOutUser() {
  return function (dispatch) {
    return AsyncStorage.removeItem('token').then(() => {
      dispatch({ type: GET_USER_SUCCESS, user: null });
    });
  };
}
