import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../../../styles/Palette';
import Button from '../../Button';

const CancelDeleteButton = (props) => {
  return (
    <ButtonWrapper>
      <Button
        color={Palette.Cancel}
        text={'취소'}
        action={props.cancelAction}
        fontColor={Palette.TextPrimary}
      />
      <Button
        color={Palette.Error}
        text={'삭제하기'}
        action={props.deleteAction}
      />
    </ButtonWrapper>
  );
};

CancelDeleteButton.prototype = {
  cancelAction: PropTypes.func,
  deleteAction: PropTypes.func,
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export default CancelDeleteButton;
