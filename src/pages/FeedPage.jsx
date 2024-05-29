import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';
import Header, { HeaderTitle } from '../components/headerComponents/Header.jsx';
import HeaderButton from '../components/headerComponents/HeaderButton.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Feed from '../components/feedComponents/Feed.jsx';
import { useEffect, useState } from 'react';
import { axiosFeed } from '../apis/Feed.jsx';
import MyPageSetting from '../components/myPage/MyPageSetting.jsx';

const FeedPage = () => {
  const [feed, setFeed] = useState([]);
  const [setting, setSetting] = useState(false);
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const params = useParams();

  useEffect(() => {
    axiosFeed(params).then((res) => {
      if (res.data['status'] === 400) {
        alert('잘못된 접근입니다.');
      } else {
        setFeed(JSON.parse(res.data.data.data));
        setNickname(JSON.parse(res.data.data.data)['nickname']);
        setProfileImage(JSON.parse(res.data.data.data)['profileImage']);
        console.log(JSON.parse(res.data.data.data)['profileImage']);
      }
    });
  }, [params]);

  const navigate = useNavigate();

  const data = {
    title: feed['postTitle'],
    date: feed['postDate'],
    content: feed['postDescription'],
    openStatus:
      feed['postStatus'] === '1'
        ? 'public'
        : feed['postStatus'] === '2'
        ? 'group'
        : 'private',
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
  return (
    <>
      <AppStyle>
        <Header
          left={
            <HeaderButton
              icon={<i className="bi bi-chevron-left"></i>}
              action={() => navigate(-1)}
            />
          }
          title={
            <HeaderTitle
              align={'center'}
              title={
                <h2>
                  <b>{data['title']}</b>
                </h2>
              }
              action={() => {}}
            />
          }
        />
        <SettingWrapper>{setting && <MyPageSetting />}</SettingWrapper>
        <Content>
          <Section>
            <Feed {...data} nickname={nickname} profileImage={profileImage} />
          </Section>
        </Content>
        <Footer />
      </AppStyle>
    </>
  );
};

const AppStyle = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  background-color: ${Palette.BodySecondary};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default FeedPage;
