import React from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';

const RoundButton = (props) => {
  return <RoundPrimaryBtn className={props.type}>{props.text}</RoundPrimaryBtn>;
};

RoundButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

const RoundPrimaryBtn = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 50px;

  &.PrimaryRound {
    background-color: ${Palette.Primary};
    color: ${Palette.BodyPrimary};
  }

  &.transparentRound {
    color: ${Palette.Primary};
    border: 1.5px solid ${Palette.Primary};
  }
`;

export default RoundButton;
