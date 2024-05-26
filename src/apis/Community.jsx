import axios from 'axios';

export const axiosAddCommunity = async (params) => {
  return await axios.post(
    'http://localhost:8080/api/communities/create',
    // null,
    {
      params: params,
    }
  );
};
