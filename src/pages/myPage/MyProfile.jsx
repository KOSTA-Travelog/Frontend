import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import Profile from '../../components/myPage/Profile';
import { ProfileStatus } from '../../components/myPage/ProfileStatusItem';
import Footer from '../../components/Footer';
import PostImages from '../../components/communities/communityDetails/PostImages';

const MyProfile = () => {
  const navigate = useNavigate();

  const myInfo = {
    nickname: 'nickname',
    email: 'ssssssssss@gmail.com',
    bio: '안녕하세요. 소개페이지입니다. 여기에서 나의 소개를 확인할 수 있어요',
  };

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
                <b>My Page</b>
              </h2>
            }
          />
        }
        right={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-pencil-square"></i>}
            action={() => {}}
          />
        }
      />
      <Main>
        <Profile {...myInfo} />
        <ProfileStatus />
        <PostImages />
        <Footer />
      </Main>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  margin: 4rem 0;
  width: 100%;
  padding: 0 1.2rem;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export default MyProfile;
