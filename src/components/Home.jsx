import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const rendering = () => {
  const result = [];
  for (let i = 0; i < 200; i++) {
    result.push(<span key={i}>{i}</span>);
  }
  return result;
};
const AppStyle = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Home() {
  return (
    <>
      <AppStyle>
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <h1>Hello World</h1>
          {rendering()}
        </main>
        <Footer />
      </AppStyle>
    </>
  );
}
