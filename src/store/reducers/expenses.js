import {
  GET_EXPENSES_SUCCESS,
  CREATE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_SUCCESS,
} from '../constants/expense';

const initialState = [];

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES_SUCCESS: {
      return action.value;
    }
    case UPDATE_EXPENSE_SUCCESS: {
      return state.map((expense) => {
        if (expense.id === action.value.id) {
          expense = action.value;
        }
        return expense;
      });
    }
    case DELETE_EXPENSE_SUCCESS: {
      return state.filter((expense) => expense.id !== action.value);
    }
    case CREATE_EXPENSE_SUCCESS: {
      return [action.value, ...state];
    }
    default:
      return state;
  }
};
