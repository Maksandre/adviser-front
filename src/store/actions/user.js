import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GET_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
} from '../constants/user';
import api from '../../http';
import { apiCallFailed, beginApiCall } from './api';

export function getUser() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return AsyncStorage.getItem('@token')
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
      .catch(apiCallFailed());
  };
}

export const loginUser = (user) => {
  return function (dispatch) {
    dispatch(beginApiCall());
    api.user
      .signIn(user)
      .then(({ token }) => {
        AsyncStorage.setItem('@token', token);
        dispatch({ type: LOGIN_USER_SUCCESS });
        dispatch(getUser());
      })
      .catch((err) => {
        dispatch(apiCallFailed());
      });
  };
};

export function logOutUser() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return AsyncStorage.removeItem('@token').then(() => {
      dispatch({ type: GET_USER_SUCCESS, user: null });
    });
  };
}

export function createUser(user) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return api.user
      .signUp(user)
      .then((response) => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          user: { email: response.email },
        });
        return true;
      })
      .catch((err) => {
        dispatch(apiCallFailed());
        // TODO set error
        return false;
      });
  };
}
