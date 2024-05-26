import axios from 'axios';

export const postImageList = async (params) => {
  return await axios.get(
    `http://127.0.0.1:8080/api/posts/imageList?postId=${params['id']}`
  );
};

export const axiosFeed = async (params) => {
  return await axios.get(
    `http://127.0.0.1:8080/api/posts/feed?postId=${params['id']}`
  );
};

export const axiosHomeFeed = async () => {
  return await axios.get('http://127.0.0.1:8080/api/posts');
};

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

export const axiosAddFeed = async (params) => {
  return await axios.post(
    // `http://localhost:8080/api/posts/create?postTitle=${params['postTitle']}&postDescription=${params['postDescription']}&postHashtag=${params['postHashtag']}&postStatus=${parmas['postStatus']}&userId=${params['userId']}`
    'http://localhost:8080/api/posts/create',
    null,
    {
      params: params,
      //  {
      //   postTitle: params['postTitle'],
      //   postDescription: params['postStatus'],
      //   postHashtag: params['postHashtag'],
      //   postStatus: params['postStatus'],
      //   userId: params['userId'],
      // },
    }
  );
};
