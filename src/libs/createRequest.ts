import IOptions from '../models/IOptions';

const createRequest = async (options: IOptions) => {
  const baseUrl = import.meta.env.VITE_URL;
  const { method, url, body = {} } = options;

  switch (method) {
    case 'GET':
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          if (response.status === 204) {
            return { status: response.status, message: 'Server found.' };
          }
          return await response.json();
        }
        return [];
      } catch (err) {
        console.log('err: ', err);
        return { error: true, status: 520 };
      }
    case 'POST':
      try {
        await fetch(baseUrl + url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      } catch (err) {
        console.log('error: ', err);
      }
      break;
    case 'DELETE':
      try {
        await fetch(baseUrl + url, {
          method,
        });
      } catch (err) {
        console.log('error: ', err);
      }
  }
};

export default createRequest;