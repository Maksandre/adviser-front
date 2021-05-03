import {
  GET_ASSETS_SUCCESS,
  CREATE_ASSET_SUCCESS,
  UPDATE_ASSET_SUCCESS,
  DELETE_ASSET_SUCCESS,
} from '../constants/asset';

const initialState = [];

export const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSETS_SUCCESS: {
      return action.value;
    }
    case UPDATE_ASSET_SUCCESS: {
      return state.map((asset) => {
        if (asset.id === action.value.id) {
          asset = action.value;
        }
        return asset;
      });
    }
    case DELETE_ASSET_SUCCESS: {
      return state.filter((asset) => asset.id !== action.value);
    }
    case CREATE_ASSET_SUCCESS: {
      return [action.value, ...state];
    }
    default:
      return state;
  }
};
