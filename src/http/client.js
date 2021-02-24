import { handleError, handleResponse } from './apiUtils';

const baseUrl = __DEV__ ? 'http://localhost:3000' : 'http://localhost:3001'; // TODO define prod url

const post = async (route, body) => {
  try {
    const response = await fetch(baseUrl + route, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const client = {
  baseUrl,
  post,
};

export { client };
