import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Footer from '../../components/Footer';

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
      <Main>
        <IntroductionWrapper>
          <CommunityImg />
          <IntoroductionWrapper>
            <Introduction>
              가족들과 국내 여행을 다녀왔다. 가을 여행이라 날씨가 너무 좋았다.
            </Introduction>
            <MemberInfoWrapper>
              <PersonIconWrapper>
                <PersonIcon className="bi bi-person-fill" />
              </PersonIconWrapper>
              <CountMemberWrapper>
                <CountMember>4</CountMember>
              </CountMemberWrapper>
            </MemberInfoWrapper>
          </IntoroductionWrapper>
        </IntroductionWrapper>
        <Line>
          <Hr />
          <CountPosts>게시글 2222건</CountPosts>
        </Line>
        <Contents>
          <PostRow>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </PostRow>
          <PostRow>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </PostRow>
        </Contents>
      </Main>
      <Footer />
    </CommunityDetailsWrapper>
  );
};

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 1rem;
`;
const Hr = styled.hr`
  margin: 0 -2rem;
  background: ${Palette.TextSecondary};
  height: 1px;
  border: 0;
  width: 100%;
`;

const CountPosts = styled.p`
  color: ${Palette.TextSecondary};
  min-width: 25%;
`;

const CommunityDetailsWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
`;

const Main = styled.div`
  width: 100%;
  padding: 4rem 0;
`;

const IntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommunityImg = styled.img`
  background-image: url('https://images.unsplash.com/photo-1578023110180-ee277d6d95c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  width: 6.5rem;
  /* height: 6.5rem; */
  border-radius: 100%;
  aspect-ratio: 1;
  object-fit: contain;
`;

const IntoroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 6.5rem;
  justify-content: center;
  gap: 1rem;

  /* padding: 1.2rem; */
`;

const Introduction = styled.div`
  padding-right: 1.3rem;
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  gap: 0.2rem;
`;

const CountMemberWrapper = styled.div`
  padding-top: 0.2rem;
`;

const CountMember = styled.p`
  color: ${Palette.TextSecondary};
  text-align: center;
`;

const PersonIconWrapper = styled.div`
  font-size: 1.3rem;
`;

const PersonIcon = styled.i`
  color: ${Palette.TextSecondary};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PostRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

const Post = styled.div`
  width: 8rem;
  aspect-ratio: 1;
  object-fit: contain;
  /* border: 1px solid; */

  background-image: url('https://images.unsplash.com/profile-1578024616928-2e448ac30b4dimage?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3');
`;

export default CommunityDetails;
