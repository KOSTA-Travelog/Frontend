import styled from 'styled-components';
import Palette from '../styles/Palette';
import React from 'react';
import Modal from '../components/Modal';

const Login = () => {
  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <LogoImgWrapper>
          <LogoImg />
        </LogoImgWrapper>
      </LogoWrapper>
      <LoginForm>
        <EmailInputWrapper>
          <LoginInput placeholder="Email" />
        </EmailInputWrapper>
        <PwInputWrapper>
          <LoginInput placeholder="Password" />
        </PwInputWrapper>
        <LoginBtnWrapper>
          <LoginBtn>Log in</LoginBtn>
          <CreateAccountBtn>Create new account</CreateAccountBtn>
        </LoginBtnWrapper>
      </LoginForm>
      <FindInfoWrapper>
        <ForgetEmailBtn>Forget account?</ForgetEmailBtn>
        <ForgetPwBtn>Forget Password?</ForgetPwBtn>
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

const EmailInputWrapper = styled.div`
  width: 100%;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 3.5rem;

  background: ${Palette.BodyPrimary};
  border: 1px solid ${Palette.InputBorder};
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  color: ${Palette.InputBorder};
  padding-left: 1rem;
`;

const PwInputWrapper = styled.div`
  width: 100%;
`;

const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 6.5rem;
  justify-content: space-between;
`;

const LoginBtn = styled.button`
  height: 3rem;
  background-color: ${Palette.Primary};
  color: ${Palette.BodyPrimary};
  border-radius: 50px;
`;

const CreateAccountBtn = styled.button`
  /* Button */

  box-sizing: border-box;
  height: 3rem;
  color: ${Palette.Primary};
  border: 1.5px solid ${Palette.Primary};
  border-radius: 50px;
`;

const FindInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem;
`;

const ForgetEmailBtn = styled.button`
  color: ${Palette.InputBorder};
`;

const ForgetPwBtn = styled.button`
  color: ${Palette.InputBorder};
`;
