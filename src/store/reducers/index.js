import { combineReducers } from 'redux';
import { userReducer } from './user';
import { apiStatusReducer } from './apiStatus';

const rootReducer = combineReducers({
  user: userReducer,
  apiCallsInProgress: apiStatusReducer,
});

export default rootReducer;
