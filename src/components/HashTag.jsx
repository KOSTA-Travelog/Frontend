import React from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';

const HashTag = (props) => {
  return (
    <HashTagWrapper>
      <HashtagText>{props.text}</HashtagText>
    </HashTagWrapper>
  );
};

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 2.7rem;
  height: 1.5rem;
  border-radius: 100px;
  background-color: ${Palette.HashTagYellowGreen};
  align-items: center;
  padding: 0 0.5rem;
`;

const HashtagText = styled.p`
  width: auto;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 128%;
  color: ${Palette.HashTagGreen};
`;

HashTag.propTypes = {
  text: PropTypes.string,
};

export default HashTag;
