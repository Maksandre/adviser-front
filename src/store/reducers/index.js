import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';
import { economyReducer } from './economy';
import { incomesReducer } from './incomes';
import { expenseReducer } from './expenses';
import { liabilityReducer } from './liabilities';
import { assetReducer } from './assets';

const rootReducer = combineReducers({
  user: userReducer,
  economy: economyReducer,
  incomes: incomesReducer,
  expenses: expenseReducer,
  liabilities: liabilityReducer,
  assets: assetReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
