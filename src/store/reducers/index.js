import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';
import { economyReducer } from './economy';

const rootReducer = combineReducers({
  user: userReducer,
  economy: economyReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
