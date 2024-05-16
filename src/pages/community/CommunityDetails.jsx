import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';

const CommunityDetailsWrapper = styled.div``;

const Main = styled.div``;

const HeaderButton = styled.div``;

const CommunityDetails = () => {
  const navigate = useNavigate();

  return (
    <CommunityDetailsWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
        right={
          <HeaderButton
            icon={<i className="bi bi-gear"></i>}
            action={() => {}}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>가족 여행</b>
              </h2>
            }
          />
        }
      />
      <Main></Main>
    </CommunityDetailsWrapper>
  );
};

export default CommunityDetails;
