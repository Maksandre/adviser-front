import {
  GET_LIABILITIES_SUCCESS,
  CREATE_LIABILITY_SUCCESS,
  UPDATE_LIABILITY_SUCCESS,
  DELETE_LIABILITY_SUCCESS,
} from '../constants/liability';

const initialState = [];

export const liabilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIABILITIES_SUCCESS: {
      return action.value;
    }
    case UPDATE_LIABILITY_SUCCESS: {
      return state.map((liability) => {
        if (liability.id === action.value.id) {
          liability = action.value;
        }
        return liability;
      });
    }
    case DELETE_LIABILITY_SUCCESS: {
      return state.filter((liability) => liability.id !== action.value);
    }
    case CREATE_LIABILITY_SUCCESS: {
      return [action.value, ...state];
    }
    default:
      return state;
  }
};
