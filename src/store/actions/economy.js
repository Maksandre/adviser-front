import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  DELETE_YIELD_SUCCESS,
  CREATE_YIELD_SUCCESS,
} from '../constants/economy';

export function getYields() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .getYields()
      .then((yields) => {
        dispatch({ type: 'GET_YIELDS_SUCCESS', yields });
      })
      .catch(apiCallFailed());
  };
}

export function createYield(yieldObj) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .createYield(yieldObj)
      .then((id) =>
        dispatch({
          type: CREATE_YIELD_SUCCESS,
          value: { ...yieldObj, id },
        }),
      )
      .catch(apiCallFailed());
  };
}

export function updateYield(yieldObj) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .updateYield(yieldObj)
      .then(
        dispatch({
          type: 'UPDATE_YIELD_SUCCESS',
          value: yieldObj,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteYield(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    console.log('ID ', id);
    return DB.economy
      .deleteYield(id)
      .then(
        dispatch({
          type: DELETE_YIELD_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
