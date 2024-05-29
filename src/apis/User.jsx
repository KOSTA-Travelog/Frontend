import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosRegistration = async (params) => {
  return await axios.post(BASE_URL + '/signUp', null, { params });
};

export const axiosEditUserInfo = async (params) => {
  return await axios
    .post(BASE_URL + '/editUserInfo', null, {
      params,
    })
    .catch((error) => {
      console.log(error);
    });
};

export const axiosUserInfo = async () => {
  return await axios.get(
    BASE_URL +
      `/userInfo?userId=${JSON.parse(sessionStorage.getItem('userId'))}`
  );
};

export const axiosGetUserId = async (nickname) => {
  return await axios.get(BASE_URL + `/nickname?nickname=${nickname}`);
};

export const axiosCheckEmail = async (id, pw) => {
  return await axios.get(BASE_URL + `/checkUser?email=${id}&password=${pw}`);
};

export const axiosWithdrawal = async () => {
  return await axios.post(
    BASE_URL + `/withdrawal?${JSON.parse(sessionStorage.getItem('userId'))}`
  );
};
