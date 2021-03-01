import { handleError, handleResponse } from './apiUtils';
import { client } from './client';

const signUp = async (user) => {
  try {
    const response = await client.post('/signup', user);
    return await handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export { signUp };
