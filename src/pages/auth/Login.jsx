import styled from 'styled-components';
import Palette from '../../styles/Palette';
import RoundButton from '../../components/RoundButton';
import InputBasic from '../../components/InputBasic';

const Login = () => {
  return (
    <LoginPageWrapper>
      <LogoWrapper>
        <LogoImgWrapper>
          <LogoImg />
        </LogoImgWrapper>
      </LogoWrapper>
      <LoginForm>
        <InputBasic text="Email" />
        <InputBasic text="Password" />
        <LoginBtnWrapper>
          <RoundButton text={'Log in'} type={'primary'} />
          <RoundButton text={'Create new account'} type={'transparent'} />
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
  padding: 1rem;
  padding-left: 3.5rem;
  padding-right: 5em;
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
