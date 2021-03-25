import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  CREATE_INFLATION_RATE_SUCCESS,
  DELETE_INFLATION_RATE_SUCCESS,
  GET_INFLATION_RATES_SUCCESS,
  UPDATE_INFLATION_RATE_SUCCESS,
} from '../constants/economy';

export function getInflationRates() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .getInflationRates()
      .then((rates) => {
        dispatch({ type: GET_INFLATION_RATES_SUCCESS, value: rates });
      })
      .catch(apiCallFailed());
  };
}

export function createInflationRate(rate) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .createInflationRate(rate)
      .then((id) =>
        dispatch({
          type: CREATE_INFLATION_RATE_SUCCESS,
          value: { ...rate, id },
        }),
      )
      .catch(apiCallFailed());
  };
}

export function updateInflationRate(rate) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .updateInflationRate(rate)
      .then(
        dispatch({
          type: UPDATE_INFLATION_RATE_SUCCESS,
          value: rate,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteInflationRate(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.economy
      .deleteInflationRate(id)
      .then(
        dispatch({
          type: DELETE_INFLATION_RATE_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
