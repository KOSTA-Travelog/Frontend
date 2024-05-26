import axios from 'axios';

export const axiosCommunityDetail = async (params) => {
  return await axios.get(
    `http://127.0.0.1:8080/api/posts/imageList?postId=${params['id']}`
  );
};

// export const axiosAddCommunity = async (params) => {
//   return await axios.post(
//     'http://localhost:8080/api/communities/create',
//     // null,
//     {
//       params: params,
//     }
//   );
// };

export const axiosCommunity = async (params) => {
  return await axios.get(
    `http://127.0.0.1:8080/api/communities/detail?communityId=${params['id']}`
  );
};

export const axiosMyCommunityList = async (params) => {
  return await axios.get(
    `http://localhost:8080/api/myCommunity?userId=${params['userId']}`
  );
};

export const axiosAllCommunityList = async () => {
  return await axios.get('http://localhost:8080/api/communities/allCommunity');
};
