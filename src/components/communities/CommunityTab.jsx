import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';

const CommunityTab = (props) => {
  return (
    <TabMenuWrapper>
      <TabMenu className={props.selected} onClick={props.action}>
        {props.text}
      </TabMenu>
      <Focus className={props.selected}></Focus>
    </TabMenuWrapper>
  );
};

CommunityTab.prototype = {
  text: PropTypes.string,
  selected: PropTypes.string,
  action: PropTypes.func,
};

const Focus = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: ${Palette.TextPrimary};

  &.selected {
    background-color: ${Palette.Primary};
  }
`;

const TabMenuWrapper = styled.div`
  width: 8.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TabMenu = styled.button`
  height: 1rem;

  &.selected {
    color: ${Palette.Primary};
  }
`;

export default CommunityTab;
