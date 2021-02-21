import { apiBaseUrl } from '../constants/apiUrl';
import { handleError, handleResponse } from './apiUtils';

baseUrl = apiBaseUrl;

const signUp = async (user) => {
  try {
    const response = await fetch(baseUrl + '/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    console.log(response);
    return handleResponse(response);
  } catch (error) {
    console.log('HERE');
    handleError(error);
  }
};

export { signUp };
