import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  GET_INCOMES_SUCCESS,
  CREATE_INCOME_SUCCESS,
  UPDATE_INCOME_SUCCESS,
  DELETE_INCOME_SUCCESS,
} from '../constants/income';

export function getIncomes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.incomes
      .getIncomes()
      .then((incomes) => {
        dispatch({ type: GET_INCOMES_SUCCESS, value: incomes });
      })
      .catch(apiCallFailed());
  };
}

export function createIncome(income) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.incomes
      .createIncome(income)
      .then((id) =>
        dispatch({
          type: CREATE_INCOME_SUCCESS,
          value: { ...income, id },
        }),
      )
      .catch(apiCallFailed());
  };
}

export function updateIncome(income) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.incomes
      .updateIncome(income)
      .then(
        dispatch({
          type: UPDATE_INCOME_SUCCESS,
          value: income,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteIncome(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.incomes
      .deleteIncome(id)
      .then(
        dispatch({
          type: DELETE_INCOME_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
