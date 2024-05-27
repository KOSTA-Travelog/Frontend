import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosCommunityDetail = async (params) => {
  return await axios.get(BASE_URL + `/posts/imageList?postId=${params['id']}`);
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
    BASE_URL + `/communities/detail?communityId=${params['id']}`
  );
};

export const axiosMyCommunityList = async (params) => {
  return await axios.get(BASE_URL + `/myCommunity?userId=${params['userId']}`);
};

export const axiosAllCommunityList = async () => {
  return await axios.get(BASE_URL + '/communities/allCommunity');
};

export const axiosMemberCommunityPostList = async (params) => {
  return await axios.get(BASE_URL + '/communityPosts/memberPage', {
    params,
  });
};

export const axiosGuestCommunityPostList = async (params) => {
  return await axios.get(BASE_URL + `/communityPosts/guest`, {
    params,
  });
};

export const axiosCurrentMemberList = async (params) => {
  return await axios.get(
    BASE_URL + `/communities/currentMember?communityId=${params['id']}`
  );
};

export const axiosCommunityPostList = async (params) => {
  return await axios.get(BASE_URL + '/communityPosts', { params });
};

export const axiosSearchNickname = async (params) => {
  return await axios.get(
    BASE_URL + `/searchNickname?nickname=${params['nickname']}`
  );
};

export const axiosAddMember = async (communityId, userId) => {
  return await axios.post(
    BASE_URL +
      `/communities/member/add?communityId=${communityId}&userId=${userId}`
  );
};
