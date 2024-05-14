import styled from "styled-components";
import Palette from "../styles/Palette.jsx";

export default function Footer() {
  const FixedFooter = styled.footer`
  border-top: 1px solid ${Palette.TextTertiary};
    background: ${Palette.BodyPrimary};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
  `;

  const FooterWrapperDiv = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  `;
  return (
    <FixedFooter>
      <FooterWrapperDiv>
        <i className="bi bi-house-door"></i>
        <i className="bi bi-search"></i>
        <i className="bi bi-plus-circle-fill"></i>
        <i className="bi bi-people"></i>
        <i className="bi bi-person-circle"></i>
      </FooterWrapperDiv>
    </FixedFooter>
  );
}
