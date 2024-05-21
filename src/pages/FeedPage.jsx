import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';
import Header, {HeaderTitle} from '../components/headerComponents/Header.jsx';
import HeaderButton from '../components/headerComponents/HeaderButton.jsx';
import Footer from '../components/Footer.jsx';
import {useNavigate} from 'react-router-dom';
import Feed from '../components/feedComponents/Feed.jsx';
import ReplyComponent from './ReplyComponent.jsx';

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

const FeedPage = () => {
  const navigate = useNavigate();
  const data = {
    title: '가평 아침고요수목원',
    date: '2024. 05. 02.',
    content: `
[수목원 힐링 여행]
🌱가평 아침고요수목원🌱

힐링 여행지 가평, 그중에서도 아침고요수목원 여행코스로 추천드립니다🪴

🌱아침고요수목원🌱

🌵위치_경기 가평군 상면 수목원로 432

🚌 차가 있으면 물론 편하지만 지하철로 청평역에서 내려서 아침고요수목원+쁘띠프랑스까지 가는 버스표 사는 것도 뚜벅이시라면 추천드립니다 (청평역에서 내리시면 버스표사는 곳이 바로 보여요)

🚌 아침고요수목원이 4계절 내내 너무 좋은 곳인데요~ 계절마다 축제를 다르게 하니 미리 일정 사이트에서 찾아보시고 가는 걸 추천드려요👍

안에 굉장히 넓고+산림욕하기 너무 좋고+정말 관리를 잘한 수목원 느낌+ 산속이어서 리틀포레스트 주인공 각입니다🌵

1/3지점쯤에 카페도 있고 식당도 있어서 산책하는 도중에도 편하게 이용할 수 있습니다🪴
`,
    openStatus: 'public',
  };
  return (<>
    <AppStyle>
      <Header
          left={<HeaderButton
              icon={<i className="bi bi-chevron-left"></i>}
              action={() => navigate(-1)}
          />}
          title={<HeaderTitle
              align={'center'}
              title={
                <h2><b>가평 아침고요수목원aaaaaaaaaaaaaaaaaaaa</b></h2>
              }
              action={() => {
              }}
          />}
      />
      <Content>
        <Section>
          <Feed {...data}/>
        </Section>
      </Content>
      <Footer/>
    </AppStyle>
  </>);
};

export default FeedPage;