import styled from 'styled-components';
import PropTypes from 'prop-types';
import Palette from '../styles/Palette';

const StyleButton = styled.button`
  position: relative;
  width: 100%;
  height: 2.6rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  background-color: ${Palette.Primary};
  color: ${Palette.BodyPrimary};

  font-style: normal;
  /* font-weight: 700; */
  font-size: 14px;
  line-height: 100%;
`;

const Button = (props) => {
  return (
    <StyleButton
      style={{
        backgroundColor: `${props.color}`,
        height: `${props.height}rem`,
        color: `${props.fontColor}`,
      }}
      onClick={props.action}
    >
      {props.text}
    </StyleButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.number,
  action: PropTypes.func,
  fontColor: PropTypes.string,
};

export default Button;
