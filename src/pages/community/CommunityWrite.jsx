import styled from 'styled-components';
import Footer from '../../components/Footer';
import Palette from '../../styles/Palette';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Header from '../../components/headerComponents/Header';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import CommunityForm from '../../components/communities/CommunityForm';

const CommunityWrite = () => {
  const navigate = useNavigate();

  return (
    <EnrollWrapper>
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
        <CommunityForm />
        {<Button text={'등록'} color={Palette.Primary} />}
      </Main>
      <Footer />
    </EnrollWrapper>
  );
};

const EnrollWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Main = styled.div`
  margin: 4rem 0;
`;

export default CommunityWrite;
