import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';
import { economyReducer } from './economy';
import { incomesReducer } from './incomes';

const rootReducer = combineReducers({
  user: userReducer,
  economy: economyReducer,
  incomes: incomesReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
