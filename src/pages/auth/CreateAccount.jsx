import styled from 'styled-components';
import RegistrationInput from '../../components/auth/RegistrationInput';
import RoundButton from '../../components/RoundButton';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useNavigate } from 'react-router-dom';
import Palette from '../../styles/Palette';

const CreateAccount = () => {
  const navigate = useNavigate();

  const inputList = [
    { text: 'Name', isWritten: 0 },
    { text: 'Nickname', isWritten: 1 },
    { text: 'Email', isWritten: 1 },
    { text: 'Password', isWritten: 1 },
    { text: 'Confirm Password', isWritten: 1 },
    { text: 'Phone number', isWritten: 1 },
  ];

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
          {inputList.map((type, index) => (
            <RegistrationInput
              key={index}
              text={type['text']}
              isWritten={type['isWritten']}
            />
          ))}
          <SignUpBtnWrapper>
            <RoundButton text={'Sign up'} type={'primary'} />
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
