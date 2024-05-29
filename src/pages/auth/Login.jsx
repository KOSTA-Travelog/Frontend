import styled from 'styled-components';
import Palette from '../../styles/Palette';
import RoundButton from '../../components/RoundButton';
import InputBasic from '../../components/InputBasic';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { axiosCheckEmail, axiosGetUserId } from '../../apis/User';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // useEffect(() => {}, [email, password]);
  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <LogoImgWrapper>
          <LogoImg />
        </LogoImgWrapper>
      </LogoWrapper>
      <LoginForm>
        <InputBasic
          text="Email"
          type={'email'}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <InputBasic
          text="Password"
          type={'password'}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <LoginBtnWrapper>
          <RoundButton
            text={'Log in'}
            type={'primary'}
            action={() => {
              postLogin(email, password);
            }}
          />
          <RoundButton
            text={'Create new account'}
            type={'transparent'}
            action={() => {
              navigate('/auth/createAccount');
            }}
          />
        </LoginBtnWrapper>
      </LoginForm>
      <FindInfoWrapper>
        <ForgetEmailBtn>Forget account?</ForgetEmailBtn>
        <BtnDivider>Or</BtnDivider>
        <ForgetPwBtn>Password?</ForgetPwBtn>
      </FindInfoWrapper>
    </LoginPageWrapper>
  );
};

export default Login;

const LogoWrapper = styled.div``;

const LogoImgWrapper = styled.div``;

const LogoImg = styled.img``;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 840px;
  justify-content: center;
  padding: 1.2rem;
`;

const LoginForm = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 6.5rem;
  justify-content: space-between;
`;

const FindInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem 5em 1rem 3.5rem;
`;

const ForgetEmailBtn = styled.button`
  color: ${Palette.InputBorder};
`;

const ForgetPwBtn = styled.button`
  color: ${Palette.InputBorder};
`;

const BtnDivider = styled.div`
  color: ${Palette.InputBorder};
`;

const getCrypto = () => {
  try {
    return window.crypto;
  } catch {
    return crypto;
  }
};

export const hashingPassword = async (password) => {
  const compatibleCrypto = getCrypto();
  const data = new TextEncoder().encode(password);
  const byteHash = await compatibleCrypto.subtle.digest('SHA-256', data);
  const arrayHash = Array.from(new Uint8Array(byteHash));
  const hexHash = arrayHash
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toLocaleUpperCase();

  return hexHash;
};

const axiosPostLogin = async (id, password) => {
  const pw = await hashingPassword(password);
  const conf = {
    method: 'post',
    maxBodyLength: Infinity,
    url: BASE_URL + '/login',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      id: id,
      pw: pw,
    },
  };
  return axios.request(conf);
};

const postLogin = async (id, pw) => {
  const password = await hashingPassword(pw);
  await axiosCheckEmail(id, password).then(async (res) => {
    await sessionStorage.setItem('userId', JSON.stringify(res.data.data.data));
  });
  await axiosPostLogin(id, pw)
    .then(async (response) => {
      console.log(JSON.stringify(response.data));

      location.href = '/';
    })
    .catch((error) => {
      console.log(error);
    });
};
