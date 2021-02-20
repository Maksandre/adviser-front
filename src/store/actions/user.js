import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_USER_SUCCESS } from '../../model/user';

export function getUser() {
  return function (dispatch) {
    return AsyncStorage.getItem('token')
      .then((token) => {
        if (!token) {
          dispatch({
            type: GET_USER_SUCCESS,
            user: { email: 'user@not.found' },
          });
        } else {
          dispatch({
            type: GET_USER_SUCCESS,
            user: { email: 'test@test.tt' },
          });
        }
      })
      .catch((err) => console.log('Error: ', err));
  };
}
