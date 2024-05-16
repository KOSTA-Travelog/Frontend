import PropTypes from "prop-types";
import styled from "styled-components";
import Palette from "../../styles/Palette.jsx";

const Button = styled.button`
  color: ${props => props.color};
`;

const HeaderButton = ({icon, action, color = Palette.TextPrimary}) => (
    <Button color={color} onClick={action}>
      {icon}
    </Button>
);

Button.propTypes = {
  color: PropTypes.string
}

HeaderButton.propTypes = {
  icon: PropTypes.node, action: PropTypes.func, color: PropTypes.string
}

export default HeaderButton;