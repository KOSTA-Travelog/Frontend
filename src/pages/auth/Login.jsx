import styled from 'styled-components';
import Palette from '../../styles/Palette';
import RoundButton from '../../components/RoundButton';
import InputBasic from '../../components/InputBasic';
import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import {axiosCheckEmail} from '../../apis/User';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // useEffect(() => {}, [email, password]);
  return (
      <LoginPageWrapper>
        <Link to="/">
          <LogoWrapper>
            <LogoImgWrapper>
              <LogoImg src="/logo_big.png"/>
            </LogoImgWrapper>
          </LogoWrapper>
        </Link>
        <LoginForm>
          <InputTagWrapper>
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
          </InputTagWrapper>
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

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoImgWrapper = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 40vh;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const LogoImg = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  aspect-ratio: 1;
`;

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  padding: 1.2rem;
`;

const LoginForm = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4rem;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const InputTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FindInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: center;
  align-items: center;
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
  /*
  const compatibleCrypto = getCrypto();
  const data = new TextEncoder().encode(password);
  const byteHash = await compatibleCrypto.subtle.digest('SHA-256', data);
  const arrayHash = Array.from(new Uint8Array(byteHash));
  const hexHash = arrayHash
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toLocaleUpperCase();
  return hexHash;
*/
  return password;
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
