import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const PageSubTitle = (props) => {
  return (
    <PageMenuArticle>
      <PageTabTitle>{props.title}</PageTabTitle>
    </PageMenuArticle>
  );
};

PageSubTitle.prototype = {
  title: PropTypes.string,
};

const PageTabTitle = styled.h2`
  height: 1.1rem;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

const PageMenuArticle = styled.article`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default PageSubTitle;
