import {
  CREATE_INFLATION_RATE_SUCCESS,
  CREATE_YIELD_SUCCESS,
  DELETE_INFLATION_RATE_SUCCESS,
  DELETE_YIELD_SUCCESS,
  GET_INFLATION_RATES_SUCCESS,
  UPDATE_INFLATION_RATE_SUCCESS,
} from '../constants/economy';

const initialState = {
  yields: [],
  inflation: [],
};

export const economyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_YIELDS_SUCCESS': {
      return { ...state, yields: action.yields };
    }
    case 'UPDATE_YIELD_SUCCESS': {
      const newYields = state.yields.map((y) => {
        if (y.id === action.value.id) {
          y = action.value;
        }
        return y;
      });
      return { ...state, yields: newYields };
    }
    case DELETE_YIELD_SUCCESS: {
      const newYields = state.yields.filter((y) => y.id !== action.value);
      return { ...state, yields: newYields };
    }
    case CREATE_YIELD_SUCCESS: {
      const newYields = [action.value, ...state.yields];
      return { ...state, yields: newYields };
    }
    case GET_INFLATION_RATES_SUCCESS: {
      return { ...state, inflation: action.value };
    }
    case CREATE_INFLATION_RATE_SUCCESS: {
      const newInflation = [action.value, ...state.inflation];
      return { ...state, inflation: newInflation };
    }
    case UPDATE_INFLATION_RATE_SUCCESS: {
      const newInflation = state.inflation.map((rate) => {
        if (rate.id === action.value.id) {
          rate = action.value;
        }
        return rate;
      });
      return { ...state, inflation: newInflation };
    }
    case DELETE_INFLATION_RATE_SUCCESS: {
      const newInflation = state.inflation.filter((y) => y.id !== action.value);
      return { ...state, inflation: newInflation };
    }
    default:
      return state;
  }
};
