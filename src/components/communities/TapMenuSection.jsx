import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';

const TapMenuSection = (props) => {
  return (
    <TabSection>
      <TabWrapper>{props.tab}</TabWrapper>
    </TabSection>
  );
};

TapMenuSection.prototype = {
  tab: PropTypes.func,
};

const TabWrapper = styled.article`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 2rem;
  align-items: center;
`;

const TabSection = styled.section`
  width: 100%;
  background-color: ${Palette.BodyPrimary};
`;

export default TapMenuSection;
