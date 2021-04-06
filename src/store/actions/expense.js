import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  GET_EXPENSES_SUCCESS,
  CREATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_SUCCESS,
} from '../constants/expense';
import convert from '../../utils/convert';

export function getExpenses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.expenses
      .getExpenses()
      .then((expenses) => {
        const formatedExpenses = expenses.map((expense) =>
          convert.forUI(expense),
        );
        dispatch({
          type: GET_EXPENSES_SUCCESS,
          value: formatedExpenses,
        });
      })
      .catch(apiCallFailed());
  };
}

export function createExpense(expense) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedExpense = convert.forDB(expense);
    return DB.expenses
      .createExpense(formatedExpense)
      .then((id) =>
        dispatch({
          type: CREATE_EXPENSE_SUCCESS,
          value: { ...formatedExpense, id },
        }),
      )
      .catch(apiCallFailed());
  };
}

export function updateExpense(expense) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedExpense = convert.forDB(expense);
    return DB.expenses
      .updateExpense(formatedExpense)
      .then(
        dispatch({
          type: UPDATE_EXPENSE_SUCCESS,
          value: formatedExpense,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteExpense(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.expenses
      .deleteExpense(id)
      .then(
        dispatch({
          type: DELETE_EXPENSE_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
