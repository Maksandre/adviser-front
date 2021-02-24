import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_USER_SUCCESS, CREATE_USER_SUCCESS } from '../model/user';
import api from '../../http';

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

export function createUser(user) {
  return function (dispatch) {
    return api.user
      .signUp(user)
      .then((response) =>
        dispatch({
          type: CREATE_USER_SUCCESS,
          user: { email: response.email },
        }),
      )
      .catch((err) => console.log(err));
  };
}
