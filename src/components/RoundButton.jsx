import React from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';

const RoundButton = (props) => {
  return (
    <RoundPrimaryBtn className={props.type} onClick={props.action}>
      {props.text}
    </RoundPrimaryBtn>
  );
};

RoundButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['Primary', 'transparent']),
  action: PropTypes.func,
};

const RoundPrimaryBtn = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 50px;

  &.Primary {
    background-color: ${Palette.Primary};
    color: ${Palette.BodyPrimary};
  }

  &.transparent {
    color: ${Palette.Primary};
    border: 1.5px solid ${Palette.Primary};
  }
`;

export default RoundButton;
