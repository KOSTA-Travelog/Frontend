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

const TitleStyleA = styled.a`
  font-size: 1.5em;
  display: flex;
  flex-direction: row;
  color: #5c7cfa;
`;

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.string,
}

export default function Header({title, left, right}) {
  return (
      <FixedHeader>
        <HeaderWrapperDiv>
          <TitleStyleA href="/">
            {left || null}
            <b>{title}</b>
          </TitleStyleA>
          {right || null}
        </HeaderWrapperDiv>
      </FixedHeader>
  );
}
