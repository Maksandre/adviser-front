import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';
import { economyReducer } from './economy';
import { incomesReducer } from './incomes';
import { expenseReducer } from './expenses';

const rootReducer = combineReducers({
  user: userReducer,
  economy: economyReducer,
  incomes: incomesReducer,
  expenses: expenseReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
