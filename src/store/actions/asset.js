import DB from '../../db';
import { apiCallFailed, beginApiCall } from './api';
import {
  GET_ASSETS_SUCCESS,
  CREATE_ASSET_SUCCESS,
  UPDATE_ASSET_SUCCESS,
  DELETE_ASSET_SUCCESS,
} from '../constants/asset';
import convert from '../../utils/convert';

export function getAssets() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.assets
      .getAssets()
      .then((assets) => {
        const formatedAssets = assets.map((asset) => convert.forUI(asset));
        dispatch({
          type: GET_ASSETS_SUCCESS,
          value: formatedAssets,
        });
      })
      .catch(apiCallFailed());
  };
}

export function createAsset(asset) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedAsset = convert.forDB(asset);
    return DB.assets
      .createAsset(formatedAsset)
      .then((id) => {
        dispatch({
          type: CREATE_ASSET_SUCCESS,
          value: { ...formatedAsset, id },
        });
        return id;
      })
      .catch(apiCallFailed());
  };
}

export function updateAsset(asset) {
  return function (dispatch) {
    dispatch(beginApiCall());
    const formatedAsset = convert.forDB(asset);
    return DB.assets
      .updateAsset(formatedAsset)
      .then(
        dispatch({
          type: UPDATE_ASSET_SUCCESS,
          value: formatedAsset,
        }),
      )
      .catch(apiCallFailed());
  };
}

export function deleteAsset(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return DB.assets
      .deleteAsset(id)
      .then(
        dispatch({
          type: DELETE_ASSET_SUCCESS,
          value: id,
        }),
      )
      .catch(apiCallFailed());
  };
}
