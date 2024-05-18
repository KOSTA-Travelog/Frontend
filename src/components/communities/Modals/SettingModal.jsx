import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../../../styles/Palette';

const SettingModal = (props) => {
  return (
    <SettingModalWrapper>
      <BtnWrapper>
        <IconWrapper>
          <i className="bi bi-person-plus"></i>
        </IconWrapper>
        <Btn>멤버 초대</Btn>
      </BtnWrapper>
      <BtnWrapper>
        <IconWrapper>{props.icon}</IconWrapper>
        <Btn>{props.text}</Btn>
      </BtnWrapper>
    </SettingModalWrapper>
  );
};

SettingModal.prototype = {
  icon: PropTypes.node,
  text: PropTypes.string,
};

const IconWrapper = styled.div`
  color: ${Palette.TextSecondary};
  font-size: 1.3rem;
`;

const SettingModalWrapper = styled.div`
  width: 9.2rem;
  height: 4.2rem;
  border-radius: 5px;
  border: 1px solid ${Palette.ModalBorder};
  background-color: ${Palette.BodyPrimary};
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  position: fixed;
  top: 6%;
  left: 55%;
  /* transform: translate(-1%, -50%); */
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.3rem;
`;

const Btn = styled.button`
  color: ${Palette.TextSecondary};
  width: 5.7rem;
  text-align: left;
  padding-left: 0.8rem;
`;

export default SettingModal;
