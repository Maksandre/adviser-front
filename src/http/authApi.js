import { apiBaseUrl } from '../constants/apiUrl';
import { handleError, handleResponse } from './apiUtils';

baseUrl = apiBaseUrl;

const signUp = async (user) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: {
        email: user.email,
        password: user.password,
      },
    });
    handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export { signUp };
