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
import { useEffect, useState } from 'react';
import Divider from '../../components/communities/communityDetails/Divider';
import { axiosUserInfo } from '../../apis/User';
import { axiosCountUserFeed, axiosGetUserPostImage } from '../../apis/Feed';

const MyProfile = () => {
  const navigate = useNavigate();
  const [setting, setSetting] = useState(false);

  const [myInfo, setMyInfo] = useState({});
  const [countPost, setCountPost] = useState(0);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axiosUserInfo().then((res) => {
      setMyInfo(JSON.parse(res.data.data.data));
    });

    axiosCountUserFeed().then((res) => {
      setCountPost(JSON.parse(res.data.data.data));
      // console.log(JSON.parse(res.data.data.data));
    });

    axiosGetUserPostImage().then((res) => {
      setPostList(JSON.parse(res.data.data.data));
    });
  }, []);

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
            icon={<i className="bi bi-three-dots-vertical"></i>}
            action={() => {
              setSetting(!setting);
            }}
          />
        }
      />
      <SettingWrapper>{setting && <MyPageSetting />}</SettingWrapper>
      <Main>
        <Profile {...myInfo} />

        {/* 
        // 프로필 정보
        <ProfileStatus /> 
        */}

        <Divider number={countPost} />
        <PostImages postList={postList} />
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
  padding-left: 1.2rem;
  padding: 1rem 0;
`;

export default MyProfile;
