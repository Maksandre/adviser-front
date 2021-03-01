export async function handleResponse(response) {
  if (response.ok) return response.json();
  else if (response.status >= 400 && response.status < 500) {
    const error = await response.text();
    throw new Error(error);
  } else {
    throw new Error('Network response was not ok.');
  }
}

export function handleError(error) {
  console.error(`API call failed. ${error}`);
  return error;
}
