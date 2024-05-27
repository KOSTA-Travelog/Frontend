import axios from 'axios';

const url = process.env.VITE_API_URL;

export const postImageList = async (params) => {
  return await axios.get(url + `/posts/imageList?postId=${params['id']}`);
};

export const axiosFeed = async (params) => {
  return await axios.get(url + `/posts/feed?postId=${params['id']}`);
};

export const axiosHomeFeed = async () => {
  return await axios.get(url + '/posts');
};

export const axiosAddFeed = async (params) => {
  return await axios.post(
    // `http://localhost:8080/api/posts/create?postTitle=${params['postTitle']}&postDescription=${params['postDescription']}&postHashtag=${params['postHashtag']}&postStatus=${parmas['postStatus']}&userId=${params['userId']}`
    url + '/posts/create',
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
