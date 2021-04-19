import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';
import { economyReducer } from './economy';
import { incomesReducer } from './incomes';
import { expenseReducer } from './expenses';
import { liabilityReducer } from './liabilities';

const rootReducer = combineReducers({
  user: userReducer,
  economy: economyReducer,
  incomes: incomesReducer,
  expenses: expenseReducer,
  liabilities: liabilityReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
