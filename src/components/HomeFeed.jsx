import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";
import Palette from "../styles/Palette.jsx";
import HeaderButton from "./buttonComponents/HeaderButton.jsx";

const rendering = () => {
  const result = [];
  for (let i = 0; i < 200; i++) {
    result.push(<span key={i}>{i}</span>);
  }
  return result;
};
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
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: ${Palette.BodyPrimary};
`;

const HomeFeed = () => (<>
  <AppStyle>
    <Header
        left={<HeaderButton
            color={Palette.Primary}
            icon={<i className="bi bi-airplane-fill"></i>}
            action={() => {
            }}
        />}
        right={<HeaderButton
            icon={<i className="bi bi-bell"></i>}
            action={() => {
            }}
        />}
        title={"TraveLog"}
    />
    <ContentDiv>
      <Section>
        <Article>
          <h1>Hello World</h1>
        </Article>
        <Article>
          <img
              src="https://images.unsplash.com/photo-1715646528734-ed6f3b83d5c4?q=80&w=1974&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""/>
          <h3>광안리 해변</h3>
          <p>asdf</p>
        </Article>
      </Section>
    </ContentDiv>
    <Footer/>
  </AppStyle>
</>);

export default HomeFeed;