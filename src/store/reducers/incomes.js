import {
  GET_INCOMES_SUCCESS,
  CREATE_INCOME_SUCCESS,
  UPDATE_INCOME_SUCCESS,
  DELETE_INCOME_SUCCESS,
} from '../constants/income';

const initialState = [];

export const incomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCOMES_SUCCESS: {
      return action.value;
    }
    case UPDATE_INCOME_SUCCESS: {
      return state.map((income) => {
        if (income.id === action.value.id) {
          income = action.value;
        }
        return income;
      });
    }
    case DELETE_INCOME_SUCCESS: {
      return state.filter((income) => income.id !== action.value);
    }
    case CREATE_INCOME_SUCCESS: {
      return [action.value, ...state.yields];
    }
  }
};
