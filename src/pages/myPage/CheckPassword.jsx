import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const CheckPassword = () => {
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
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>비밀번호 확인</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <InputBasic text={'Password'} />
        <RoundButton text={'확인'} type={'primary'} />
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
  height: 7.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default CheckPassword;
