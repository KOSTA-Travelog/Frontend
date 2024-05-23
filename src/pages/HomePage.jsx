import Header, { HeaderTitle } from '../components/headerComponents/Header.jsx';
import Footer from '../components/Footer.jsx';
import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';
import HeaderButton from '../components/headerComponents/HeaderButton.jsx';
import HomeFeedPreview from '../components/feedComponents/HomeFeedPreview.jsx';
import { useEffect, useState } from 'react';
import { axiosHomeFeed } from '../apis/Feed.jsx';

const AppStyle = styled.div`
  // margin: 4rem 0;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  background-color: ${Palette.BodySecondary};
`;

const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: ${Palette.BodyPrimary};
`;

const HomePage = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    axiosHomeFeed().then((response) => {
      const postList = JSON.parse(response.data.data.data);
      setFeedList(postList);
    });
  }, []);

  const list = feedList.map((data) => {
    return (
      <Article key={data['postId']}>
        <HomeFeedPreview
          image={data['images']}
          userImg={
            'https://images.unsplash.com/profile-1578024616928-2e448ac30b4dimage?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
          }
          userName={'Thierry K'}
          title={data['postTitle']}
          likeCount={64}
          replyCount={72}
          feedId={data['postId']}
        />
      </Article>
    );
  });
  return (
    <>
      <AppStyle>
        <Header
          left={
            <HeaderButton
              color={Palette.Primary}
              icon={<i className="bi bi-airplane-fill"></i>}
              action={() => {
                location.href = '/';
              }}
            />
          }
          right={
            <HeaderButton
              icon={<i className="bi bi-bell"></i>}
              action={() => {}}
            />
          }
          title={
            <HeaderTitle
              align={'flex-start'}
              title={
                <h2 style={{ color: Palette.Primary }}>
                  <b>TraveLog</b>
                </h2>
              }
              action={() => {
                location.href = '/';
              }}
            />
          }
        />
        <ContentDiv>
          <Section>{list}</Section>
        </ContentDiv>
        <Footer />
      </AppStyle>
    </>
  );
};

export default HomePage;
