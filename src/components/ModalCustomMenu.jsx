import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../styles/Palette';

const ModalCustomMenu = (props) => {
  return (
    <BtnWrapper>
      {props.icon == null || <IconWrapper>{props.icon}</IconWrapper>}
      <Btn onClick={props.action}>{props.text}</Btn>
    </BtnWrapper>
  );
};

ModalCustomMenu.prototype = {
  icon: PropTypes.node,
  text: PropTypes.string,
  action: PropTypes.func,
};

const IconWrapper = styled.div`
  color: ${Palette.TextSecondary};
  font-size: 1.3rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
  min-height: 2.2rem;
  display: flex;
  flex-direction: row;

  /* justify-content: space-between; */
  align-items: center;
  /* padding: 0.3rem 0; */
`;

const Btn = styled.button`
  color: ${Palette.TextSecondary};
  width: 6rem;
  text-align: left;
  padding-left: 0.8rem;
`;

export default ModalCustomMenu;
