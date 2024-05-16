import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const CommunitySubTitle = (props) => {
  return (
    <CommunityMenuArticle>
      <CommunityTabTitle>{props.title}</CommunityTabTitle>
    </CommunityMenuArticle>
  );
};

CommunitySubTitle.prototype = {
  title: PropTypes.string,
};

const CommunityTabTitle = styled.h2`
  height: 1.1rem;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

const CommunityMenuArticle = styled.article`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CommunitySubTitle;
