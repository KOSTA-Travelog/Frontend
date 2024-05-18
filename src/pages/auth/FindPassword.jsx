import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const FindPassword = () => {
  const [isModal, setModal] = useState(false);

  const navigate = useNavigate();

  return (
    <FindPasswordWrapper>
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
                <b>Find password</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <FindPasswordContentWrapper>
          <FindPasswordInputWrapper>
            <InputBasic text={'Email'} />
            <InputBasic text={'Name'} />
            <InputBasic text={'Phone number'} />
          </FindPasswordInputWrapper>
          <RoundButton text={'Find password'} type={'Primary'} />
        </FindPasswordContentWrapper>
        {!isModal ? (
          ''
        ) : (
          <Modal
            title={'비밀번호 확인'}
            description={'회원님의 변경된 비밀번호가 email로 전송되었습니다.'}
          />
        )}
      </Main>
    </FindPasswordWrapper>
  );
};

const FindPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FindPasswordContentWrapper = styled.div`
  height: 16.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FindPasswordInputWrapper = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FindPassword;
