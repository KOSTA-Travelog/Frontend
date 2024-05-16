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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 2rem;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: clip;
`

const Header = ({title, left, right}) => (
    <FixedHeader>
      <HeaderWrapperDiv>
        <ButtonWrapper>
          {left}
        </ButtonWrapper>
        {title}
        <ButtonWrapper>
          {right}
        </ButtonWrapper>
      </HeaderWrapperDiv>
    </FixedHeader>
);

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.node,
}

export const HeaderTitle = ({align, title, action}) => (
    <Title onClick={action} style={{
      alignItems: align,
    }}>
      {title}
    </Title>
)

HeaderTitle.propTypes = {
  align: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  title: PropTypes.node,
  action: PropTypes.func,
}

export default Header;