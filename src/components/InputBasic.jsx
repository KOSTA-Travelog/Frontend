import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../styles/Palette';

const InputBasic = (props) => {
  return (
    <InputWrapper>
      <InputStyle placeholder={props.text} className={props.type} />
    </InputWrapper>
  );
};

InputBasic.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

const InputWrapper = styled.div`
  width: 100%;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 3.5rem;

  background: ${Palette.BodyPrimary};
  border: 1px solid ${Palette.InputBorder};
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;

  color: ${Palette.InputBorder};
  padding-left: 1rem;

  &.searchInput {
    height: 3rem;
  }
`;

export default InputBasic;
