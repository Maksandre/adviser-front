import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  GET_INCOMES_SUCCESS,
  CREATE_INCOME_SUCCESS,
  UPDATE_INCOME_SUCCESS,
  DELETE_INCOME_SUCCESS,
} from '../constants/income';
import convert from '../../utils/convert';

export function getIncomes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.incomes
      .getIncomes()
      .then((incomes) => {
        const formatedIncomes = incomes.map((income) => convert.forUI(income));
        dispatch({
          type: GET_INCOMES_SUCCESS,
          value: formatedIncomes,
        });
      })
      .catch(apiCallFailed());
  };
}

export function createIncome(income) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedIncome = convert.forDB(income);
    return DB.incomes
      .createIncome(formatedIncome)
      .then((id) =>
        dispatch({
          type: CREATE_INCOME_SUCCESS,
          value: { ...formatedIncome, id },
        }),
      )
      .catch(apiCallFailed());
  };
}

export function updateIncome(income) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedIncome = convert.forDB(income);
    return DB.incomes
      .updateIncome(formatedIncome)
      .then(
        dispatch({
          type: UPDATE_INCOME_SUCCESS,
          value: formatedIncome,
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
