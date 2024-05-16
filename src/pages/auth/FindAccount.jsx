import React, { useState } from 'react';
import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import Modal from '../../components/Modal';

const FindAccount = (props) => {
  const [isModal, setModal] = useState(1);

  return (
    <FindAccountWrapper>
      <FindAccountInputWrapper>
        <InputBasic text={'Name'} />
        <InputBasic text={'Phone number'} />
      </FindAccountInputWrapper>
      <RoundButton text={'Find my account'} type={'PrimaryRound'} />
      {isModal || (
        <Modal title={'계정 확인'} description={'su******@gmail.com'} />
      )}
    </FindAccountWrapper>
  );
};

const FindAccountWrapper = styled.div`
  padding: 1.2rem;
  height: 14.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FindAccountInputWrapper = styled.div`
  height: 7.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FindAccount;
