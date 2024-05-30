import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postImageList = async (params) => {
  return await axios.get(BASE_URL + `/posts/imageList?postId=${params['id']}`);
};

export const axiosFeed = async (params) => {
  try {
    return await axios.get(BASE_URL + `/posts/feed?postId=${params['id']}`);
  } catch (err) {
    console.log(err);
  }
};

export const axiosHomeFeed = async () => {
  console.log(BASE_URL);
  return await axios.get(BASE_URL + '/posts');
};

export const axiosAddFeed = async (params) => {
  return await axios.post(
    // `http://localhost:8080/api/posts/create?postTitle=${params['postTitle']}&postDescription=${params['postDescription']}&postHashtag=${params['postHashtag']}&postStatus=${parmas['postStatus']}&userId=${params['userId']}`
    BASE_URL + '/posts/create',
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

export const axiosCountUserFeed = async () => {
  return await axios.post(
    BASE_URL +
      `/posts/user/count?userId=${JSON.parse(sessionStorage.getItem('userId'))}`
  );
};

export const axiosGetUserPostImage = async () => {
  return await axios.get(
    BASE_URL +
      `/myPage/postList?userId=${JSON.parse(sessionStorage.getItem('userId'))}`
  );
};

export const axiosDeleteFeed = async (postId) => {
  try {
    const res = await axios.post(BASE_URL + `/posts/remove?postId=${postId}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
