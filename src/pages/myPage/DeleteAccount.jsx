import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import Header from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../components/headerComponents/HeaderButton';

const DeleteAccount = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
      />
      <Main>
        <CheckMessage>정말로 탈퇴하시겠습니까?</CheckMessage>
        <InputWrapper>
          <InputBasic text={'Password'} />
          <RoundButton text={'확인'} type={'primary'} action={() => {}} />
        </InputWrapper>
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 0 1.2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  height: 14em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 7.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CheckMessage = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export default DeleteAccount;
