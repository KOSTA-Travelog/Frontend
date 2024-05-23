import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';

const CommunityForGuest = () => {
  return (
    <CommunityWrapper>
      <Header
        vertical={0}
        horizontal={1.0}
        left={
          <HeaderTitle
            align={'flex-start'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>Community</b>
              </h2>
            }
          />
        }
      />
      <Main></Main>
      <Footer></Footer>
    </CommunityWrapper>
  );
};

const CommunityWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Main = styled.div`
  margin: 4rem 0;
`;

export default CommunityForGuest;
