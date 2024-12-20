import createRequest from "./createRequest";

export const pingAPI = async() => {
  const options = {
    method: 'GET',
    url: '/ping',
  };

  const data = await createRequest(options);
  return data;
}

export const getAPI = async () => {
  const options = {
    method: 'GET',
    url: '/notes',
  };

  const data = await createRequest(options);
  return data;
};

export const postAPI = async (note: string) => {
  const options = {
    method: 'POST',
    url: '/notes',
    body: {
      content: note,
    },
  };

  await createRequest(options);
};

export const deleteAPI = async (id: number) => {
  const options = {
    method: 'DELETE',
    url: `/notes/${id}`,
  };

  await createRequest(options);
};