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

export const axiosMemberCommunityPostList = async (params) => {
  return await axios.get(
    'http://localhost:8080/api/communityPosts/memberPage',
    { params }
  );
};

export const axiosGuestCommunityPostList = async (params) => {
  return await axios.get('http://localhost:8080/api/communityPosts/guest', {
    params,
  });
};

export const axiosCurrentMemberList = async (params) => {
  return await axios.get(
    `http://localhost:8080/api/communities/currentMember?communityId=${params['id']}`
  );
};

export const axiosSearchNickname = async (params) => {
  return await axios.get(
    `http://localhost:8080/api/searchNickname?nickname=${params['nickname']}`
  );
};

export const axiosAddMember = async (communityId, userId) => {
  return await axios.post(
    `http://localhost:8080/api/communities/member/add?communityId=${communityId}&userId=${userId}`
  );
};
