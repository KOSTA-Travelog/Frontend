import React, { useState } from 'react';
import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import RoundButton from '../../components/RoundButton';
import Modal from '../../components/Modal';

const FindPassword = (props) => {
  const [isModal, setModal] = useState(0);

  return (
    <FindPasswordWrapper>
      <FindPasswordContentWrapper>
        <FindPasswordInputWrapper>
          <InputBasic text={'Email'} />
          <InputBasic text={'Name'} />
          <InputBasic text={'Phone number'} />
        </FindPasswordInputWrapper>
        <RoundButton text={'Find my password'} type={'PrimaryRound'} />
      </FindPasswordContentWrapper>
      {!isModal || (
        <Modal
          title={'비밀번호 확인'}
          description={'회원님의 변경된 비밀번호가 email로 전송되었습니다.'}
        />
      )}
    </FindPasswordWrapper>
  );
};

const FindPasswordWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
`;

const FindPasswordContentWrapper = styled.div`
  height: 19rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FindPasswordInputWrapper = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FindPassword;
