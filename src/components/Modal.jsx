import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';
import Button from './Button';
import CancelDeleteButton from './common/modal/CancelDeleteButton';

const Modal = (props) => {
  return (
    <Background>
      <Wrapper>
        <CloseIconWrapper>
          {props.isCloseBtnNeed && (
            <CloseIcon className="bi bi-x-lg" onClick={props.closeAction} />
          )}
        </CloseIconWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title>{props.title}</Title>
          </TitleWrapper>
          <DescriptionWrapper>
            <Description>{props.description}</Description>
          </DescriptionWrapper>
        </ContentWrapper>
        {props.isCheckDelete && (
          <CancelDeleteButton
            deleteAction={props.deleteAction}
            cancelAction={props.cancelAction}
          />
        )}
        {props.isConfirmButton && (
          <Button text={'확인'} action={props.confirmAction} />
        )}
      </Wrapper>
    </Background>
  );
};

Modal.propTypes = {
  isCheckDelete: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  deleteAction: PropTypes.func,
  cancelAction: PropTypes.func,
  closeAction: PropTypes.func,
  isCloseBtnNeed: PropTypes.bool,
  isConfirmButton: PropTypes.bool,
  confirmAction: PropTypes.func,
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
`;

const Wrapper = styled.div`
  width: 90%;
  min-height: 2vh;
  border: 1px solid ${Palette.Border};
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 2rem;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 136%;

  text-align: center;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  min-height: 2rem;
  /* padding-left: 3rem;
  padding-right: 4rem; */
`;

const Description = styled.p`
  width: 100%;
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  text-align: center;
`;

export default Modal;
