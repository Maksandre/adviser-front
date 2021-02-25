import { API_CALL_FAIL, BEGIN_API_CALL } from '../constants/apiCalls';

export function beginApiCall() {
  return {
    type: BEGIN_API_CALL,
  };
}

export function apiCallFailed(error) {
  return {
    type: API_CALL_FAIL,
    // TODO handle error
  };
}
