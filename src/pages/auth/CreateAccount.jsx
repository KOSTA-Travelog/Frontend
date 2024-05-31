import styled from 'styled-components';
import RegistrationInput from '../../components/auth/RegistrationInput';
import RoundButton from '../../components/RoundButton';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useNavigate } from 'react-router-dom';
import Palette from '../../styles/Palette';
import { useEffect, useState } from 'react';
import { axiosRegistration } from '../../apis/User';
import { hashingPassword } from './Login';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [inputList, setInputList] = useState([
    { key: 'name', text: 'name', isWritten: true, input: '' },
    { key: 'nickname', text: 'nickname', isWritten: true, input: '' },
    {
      key: 'email',
      text: 'email',
      isWritten: true,
      input: '',
    },
    {
      key: 'password',
      text: 'password',
      isWritten: true,
      input: '',
      type: 'password',
    },
    {
      key: 'passwordCheck',
      text: 'confirm password',
      isWritten: true,
      input: '',
      type: 'password',
    },
    {
      key: 'phoneNumber',
      text: 'phone number',
      isWritten: true,
      input: '',
    },
  ]);

  const handleInputChange = (index, value) => {
    const newList = [...inputList];
    newList[index].input = value;
    if (newList[index].input === '') {
      newList[index].isWritten = false;
    } else {
      newList[index].isWritten = true;
    }
    setInputList(newList);
  };

  const handleSignUp = async () => {
    const params = {};
    const promises = inputList.map(async (data) => {
      switch (data.key) {
        case 'password':
        case 'passwordCheck':
          params[data.key] = await hashingPassword(data.input);
          break;
        case 'email':
          console.log(emailCheck(data.input));
          if (!emailCheck(data.input)) {
            alert('올바른 이메일 주소를 입력하세요. (예: example@domain.com)');
          } else {
            params[data.key] = data.input;
          }
          break;
        case 'phoneNumber':
          if (!phoneNumberCheck(data.input)) {
            alert('올바른 형식의 번호를 입력하세요. (예: 010-1234-1234)');
          } else {
            params[data.key] = data.input;
          }
          break;
        default:
          params[data.key] = data.input;
      }
    });
    await Promise.all(promises);
    return params;
  };

  const onSignUpClick = async () => {
    const params = await handleSignUp();
    await axiosRegistration(params);
    alert('가입이 완료되었습니다!');
    navigate('/auth/login');
  };

  const emailCheck = (email) => {
    const result = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!result.test(email)) {
      return false;
    } else {
      return true;
    }
  };

  const phoneNumberCheck = (number) => {
    let result = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    return result.test(number);
  };

  return (
    <RegistrationWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>Create account</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <RegistrationFormWrapper>
          {inputList.map((data, index) => (
            <RegistrationInput
              onChange={(e) => handleInputChange(index, e.target.value)}
              key={data['key']}
              text={data['text']}
              isWritten={data['isWritten']}
              type={data['type']}
            />
          ))}
          <SignUpBtnWrapper>
            <RoundButton
              text={'Sign up'}
              type={'primary'}
              action={onSignUpClick}
            />
          </SignUpBtnWrapper>
        </RegistrationFormWrapper>
      </Main>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  padding: 1.2rem;
`;

const RegistrationFormWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignUpBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 3rem;
  justify-content: space-between;
`;

export default CreateAccount;
