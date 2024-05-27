import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postImageList = async (params) => {
  return await axios.get(BASE_URL + `/posts/imageList?postId=${params['id']}`);
};

export const axiosFeed = async (params) => {
  return await axios.get(BASE_URL + `/posts/feed?postId=${params['id']}`);
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
