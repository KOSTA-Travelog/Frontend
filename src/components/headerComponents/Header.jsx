import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";
import PropTypes from "prop-types";

const FixedHeader = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
`;

const HeaderWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  height: 100%;
`;

const Header = ({title, left, right}) => (
    <FixedHeader>
      <HeaderWrapperDiv>
        {left}
        {title}
        {right}
      </HeaderWrapperDiv>
    </FixedHeader>
);

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.node,
}

export default Header;