import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  GET_LIABILITIES_SUCCESS,
  CREATE_LIABILITY_SUCCESS,
  UPDATE_LIABILITY_SUCCESS,
  DELETE_LIABILITY_SUCCESS,
} from '../constants/liability';
import convert from '../../utils/convert';

export function getLiabilities() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.liabilities
      .getLiabilities()
      .then((liabilities) => {
        const formatedLiabilities = liabilities.map((liability) =>
          convert.forUI(liability),
        );
        dispatch({
          type: GET_LIABILITIES_SUCCESS,
          value: formatedLiabilities,
        });
      })
      .catch(apiCallFailed());
  };
}

export function createLiability(liability) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedLiability = convert.forDB(liability);
    return DB.liabilities
      .createLiability(formatedLiability)
      .then((id) => {
        dispatch({
          type: CREATE_LIABILITY_SUCCESS,
          value: { ...formatedLiability, id },
        });
        return id;
      })
      .catch(apiCallFailed());
  };
}

export function updateLiability(liability) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedLiability = convert.forDB(liability);
    return DB.liabilities
      .updateLiability(formatedLiability)
      .then(
        dispatch({
          type: UPDATE_LIABILITY_SUCCESS,
          value: formatedLiability,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteLiability(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.liabilities
      .deleteLiability(id)
      .then(
        dispatch({
          type: DELETE_LIABILITY_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
