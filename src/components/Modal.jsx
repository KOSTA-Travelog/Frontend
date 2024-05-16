import React from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';

const Modal = (props) => {
  return (
    <ModalBackground>
      <ModalWrapper>
        <CloseIconWrapper>
          <CloseIcon className="bi bi-x-lg" />
        </CloseIconWrapper>
        <ModalContentWrapper>
          <ModalTitleWrapper>
            <ModalTitle>{props.title}</ModalTitle>
          </ModalTitleWrapper>
          <ModalDescriptionWrapper>
            <ModalDescription>{props.description}</ModalDescription>
          </ModalDescriptionWrapper>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalBackground>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div`
  width: 90%;
  min-height: 2vh;
  border: 1px solid ${Palette.ModalBorder};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.2rem 1.2rem 2rem 1.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${Palette.BodyPrimary};
`;

const CloseIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  padding-left: 18rem;
  font-size: 1.3rem;
  -webkit-text-stroke: 1.2px;
`;

const CloseIcon = styled.i`
  font-style: normal;
  width: 100%;
  height: 100%;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalTitleWrapper = styled.div`
  width: 100%;
  height: 2rem;
`;

const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 136%;

  text-align: center;
`;

const ModalDescriptionWrapper = styled.div`
  width: 100%;
  min-height: 2rem;
  padding-left: 3rem;
  padding-right: 4rem;
`;

const ModalDescription = styled.p`
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: center;
`;

export default Modal;
