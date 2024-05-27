import axios from 'axios';

const url = process.env.VITE_API_URL;

export const axiosCommunityDetail = async (params) => {
  return await axios.get(url + `/posts/imageList?postId=${params['id']}`);
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
    url + `/communities/detail?communityId=${params['id']}`
  );
};

export const axiosMyCommunityList = async (params) => {
  return await axios.get(url + `/myCommunity?userId=${params['userId']}`);
};

export const axiosAllCommunityList = async () => {
  return await axios.get(url + '/communities/allCommunity');
};

export const axiosMemberCommunityPostList = async (params) => {
  return await axios.get(url + '/communityPosts/memberPage', { params });
};

export const axiosGuestCommunityPostList = async (params) => {
  return await axios.get(url + `/communityPosts/guest`, {
    params,
  });
};

export const axiosCurrentMemberList = async (params) => {
  return await axios.get(
    url + `/communities/currentMember?communityId=${params['id']}`
  );
};

export const axiosSearchNickname = async (params) => {
  return await axios.get(
    url + `/searchNickname?nickname=${params['nickname']}`
  );
};

export const axiosAddMember = async (communityId, userId) => {
  return await axios.post(
    url + `/communities/member/add?communityId=${communityId}&userId=${userId}`
  );
};
