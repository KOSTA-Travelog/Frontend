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

export const axiosCommunity = async (queryString) => {
  return await axios.get(
    BASE_URL + `/communities/detail?communityId=${queryString}`
  );
};

export const axiosMyCommunityList = async () => {
  return await axios.get(
    BASE_URL +
      `/communities/myCommunity?userId=${JSON.parse(
        sessionStorage.getItem('userId')
      )}`
  );
};

export const axiosAllCommunityList = async () => {
  return await axios.get(BASE_URL + '/communities/allCommunity');
};

// export const axiosMemberCommunityPostList = async (params) => {
//   return await axios.get(BASE_URL + '/communityPosts/memberPage', {
//     params,
//   });
// };

// export const axiosGuestCommunityPostList = async (params) => {
//   return await axios.get(BASE_URL + `/communityPosts/guest`, {
//     params,
//   });
// };

export const axiosCommunityPostList = async (communityId, userId) => {
  return await axios.get(
    BASE_URL + `/communityPosts?id=${communityId}&userId=${userId}`
  );
};

export const axiosCurrentMemberList = async (communityId) => {
  return await axios.get(
    BASE_URL + `/communities/currentMember?communityId=${communityId}`
  );
};

export const axiosSearchNickname = async (queryString) => {
  return await axios.get(BASE_URL + `/searchNickname?nickname=${queryString}`);
};

export const axiosAddMember = async (communityId, userId) => {
  return await axios.post(
    BASE_URL +
      `/communities/member/add?communityId=${communityId}&userId=${userId}`
  );
};

export const axiosCheckCreatorNickname = async (communityId) => {
  return await axios.get(
    BASE_URL + `/communities/creator?communityId=${communityId}`
  );
};

export const axiosInsertCommunityMember = async (communityId, nickname) => {
  return await axios.post(
    BASE_URL +
      `/communities/member/add?communityId=${communityId}&nickname=${nickname}`
  );
};
