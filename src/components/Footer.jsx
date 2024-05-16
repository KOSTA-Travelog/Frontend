import styled from "styled-components";
import Palette from "../styles/Palette.jsx";

const FixedFooter = styled.footer`
  border-top: 1px solid ${Palette.TextTertiary};
  background: ${Palette.BodyPrimary};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
`;

const FooterWrapperUl = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
`;

const NavLink = styled.button`
  color: ${Palette.TextPrimary};
  background-color: ${Palette.BodyPrimary};
  border: 0;
  font-size: 20px;

  &.primary-icon {
    color: ${Palette.Primary};
    font-size: 40px;
  }
`;

export default function Footer() {
  return (
      <FixedFooter>
        <FooterWrapperUl>
          <li>
            <NavLink href="#">
              <i className="bi bi-house-door"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="#">
              <i className="bi bi-search"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="primary-icon">
              <i className="bi bi-plus-circle-fill"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="#">
              <i className="bi bi-people"></i>
            </NavLink>
          </li>
          <li>
            <NavLink href="#">
              <i className="bi bi-person-circle"></i>
            </NavLink>
          </li>
        </FooterWrapperUl>
      </FixedFooter>
  );
}
