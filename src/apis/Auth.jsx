import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosRegistration = async (params) => {
  return await axios.post(BASE_URL + '/signUp', null, { params });
};

// 정보 수정
export const axiosEditUserInfo = async (params) => {
  return await axios.post(BASE_URL + '/editUserInfo', null, {
    params: { ...params },
  });
};

// 프로필 정보 가져오기
export const axiosGetProfile = async () => {
  return await axios.get(BASE_URL + '/profile');
};
