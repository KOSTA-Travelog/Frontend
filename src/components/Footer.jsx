import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';
import { Link } from 'react-router-dom';

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

const IconWrapper = styled.div`
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
          <Link to="/">
            <IconWrapper href="/">
              <i className="bi bi-house-door"></i>
            </IconWrapper>
          </Link>
        </li>
        <li>
          <Link to="#">
            <IconWrapper>
              <i className="bi bi-search"></i>
            </IconWrapper>
          </Link>
        </li>
        <li>
          <Link to="/feed/write">
            <IconWrapper className="primary-icon">
              <i className="bi bi-plus-circle-fill"></i>
            </IconWrapper>
          </Link>
        </li>
        <li>
          <Link to="/community">
            <IconWrapper href="#">
              <i className="bi bi-people"></i>
            </IconWrapper>
          </Link>
        </li>
        <li>
          <Link to="/myPage/profile">
            <IconWrapper>
              <i className="bi bi-person-circle"></i>
            </IconWrapper>
          </Link>
        </li>
      </FooterWrapperUl>
    </FixedFooter>
  );
}
