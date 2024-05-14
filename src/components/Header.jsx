import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

const FixedHeaderDiv = styled.main`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
`;

const TitleStyleA = styled.a`
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  color: #5C7CFA;
`;

const HeaderWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;
export default function Header() {

  return (<header>
    <FixedHeaderDiv>
      <HeaderWrapperDiv>
        <TitleStyleA href="/">
          <i className="bi bi-airplane-fill"></i>
          <b>Trevelog</b>
        </TitleStyleA>
        <i className="bi bi-bell"></i>
      </HeaderWrapperDiv>
    </FixedHeaderDiv>
  </header>)
}
