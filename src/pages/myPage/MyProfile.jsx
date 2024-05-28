import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import Profile from '../../components/myPage/Profile';
import { ProfileStatus } from '../../components/myPage/ProfileStatusItem';
import Footer from '../../components/Footer';
import PostImages from '../../components/communities/communityDetails/PostImages';
import MyPageSetting from '../../components/myPage/MyPageSetting';
import { useState } from 'react';

const MyProfile = () => {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);

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
            icon={<i className="bi bi-gear"></i>}
            action={() => {
              setSetting(!setting);
            }}
          />
        }
      />
      <SettingWrapper>{setting && <MyPageSetting />}</SettingWrapper>
      <Main>
        <Profile {...myInfo} />
        <ProfileStatus />
        <PostImages postList={[]}/>
      </Main>
      <Footer />
    </PageWrapper>
  );
};

const SettingWrapper = styled.div`
  position: absolute;
  z-index: 200;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: -15px;

  @media (min-width: 900px) {
    width: 95%;
  }
`;

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
