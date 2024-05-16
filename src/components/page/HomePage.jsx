import Header, {HeaderTitle} from "../headerComponents/Header.jsx";
import Footer from "../Footer.jsx";
import styled from "styled-components";
import Palette from "../../styles/Palette.jsx";
import HeaderButton from "../headerComponents/HeaderButton.jsx";
import HomeFeedPreview from "../feedComponents/HomeFeedPreview.jsx";

const AppStyle = styled.div`
  //margin: 4rem 0;
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

const HomePage = () => (<>
  <AppStyle>
    <Header
        left={<HeaderButton
            color={Palette.Primary}
            icon={<i className="bi bi-airplane-fill"></i>}
            action={() => {
              location.href = "/"
            }}
        />}
        right={<HeaderButton
            icon={<i className="bi bi-bell"></i>}
            action={() => {
            }}
        />}
        title={<HeaderTitle
            align={"flex-start"}
            title={
              <h2 style={{color: Palette.Primary}}><b>TraveLog</b></h2>
            }
            action={() => {
              location.href = "/"
            }}
        />}
    />
    <ContentDiv>
      <Section>
        <Article>
          <HomeFeedPreview
              image={"https://images.unsplash.com/photo-1578023110180-ee277d6d95c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              userImg={"https://images.unsplash.com/profile-1578024616928-2e448ac30b4dimage?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"}
              userName={"Thierry K"}
              title={"스페이스 니들 시애틀, 워싱턴 밤"}
              likeCount={64}
              replyCount={72}
              feedId={1}
          />
        </Article>
        <Article>
          <HomeFeedPreview
              image={"https://images.unsplash.com/photo-1715646528734-ed6f3b83d5c4?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              userImg={"https://images.unsplash.com/profile-1699665121743-ced1edf9daaaimage?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"}
              userName={"Luke Miller"}
              title={"건물 측면의 네온사인"}
          />
        </Article>
        <Article>
          <HomeFeedPreview
              image={"https://images.unsplash.com/photo-1578023110180-ee277d6d95c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              userImg={"https://images.unsplash.com/profile-1578024616928-2e448ac30b4dimage?bg=fff&crop=faces&dpr=2&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"}
              userName={"Thierry K"}
              title={"스페이스 니들 시애틀, 워싱턴 밤aaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
          />
        </Article>
      </Section>
    </ContentDiv>
    <Footer/>
  </AppStyle>
</>);

export default HomePage;