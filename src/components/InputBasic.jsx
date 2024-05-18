import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../styles/Palette';

const InputBasic = (props) => {
  return (
    <InputWrapper>
      {props.searchIcon && <SearchIcon className="bi bi-search"></SearchIcon>}
      <InputStyle
        placeholder={props.text}
        style={{ height: `${props.height}rem` }}
        className={props.searchIcon && 'search'}
      />
    </InputWrapper>
  );
};

InputBasic.propTypes = {
  text: PropTypes.string,
  height: PropTypes.number,
  searchIcon: PropTypes.bool,
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.i`
  position: relative;
  left: 1.7rem;
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

  &.search {
    &::placeholder {
      padding-left: 1.2rem;
    }
  }
`;

export default InputBasic;
