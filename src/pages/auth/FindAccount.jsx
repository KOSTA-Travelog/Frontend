import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import Modal from '../../components/Modal';
import { useState } from 'react';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const FindAccount = () => {
  const navigate = useNavigate();

  const [isModal, setModal] = useState(false);

  return (
    <FindAccountWrapper>
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
                <b>Find account</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <FindAccountInputWrapper>
          <InputBasic text={'Name'} />
          <InputBasic text={'Phone number'} />
        </FindAccountInputWrapper>
        <RoundButton text={'Find my account'} type={'PrimaryRound'} />
        {!isModal ? (
          ''
        ) : (
          <Modal title={'계정 확인'} description={'su******@gmail.com'} />
        )}
      </Main>
    </FindAccountWrapper>
  );
};

const FindAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const Main = styled.div`
  padding: 1.2rem;
  height: 14.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FindAccountInputWrapper = styled.div`
  height: 7.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FindAccount;
