import React, { useState } from 'react';
import styled from 'styled-components';
import RegistrationInput from '../../components/auth/RegistrationInput';
import RoundButton from '../../components/RoundButton';

const Registration = () => {
  const inputList = [
    { text: 'Name', isWritten: 0 },
    { text: 'Nickname', isWritten: 1 },
    { text: 'Email', isWritten: 1 },
    { text: 'Password', isWritten: 1 },
    { text: 'Confirm Password', isWritten: 1 },
    { text: 'Phone number', isWritten: 1 },
  ];

  return (
    <RegistrationWrapper>
      <RegistrationFormWrapper>
        {inputList.map((type, index) => (
          <RegistrationInput
            key={index}
            text={type['text']}
            isWritten={type['isWritten']}
          />
        ))}
        <SignUpBtnWrapper>
          <RoundButton text={'Sign up'} type={'PrimaryRound'} />
        </SignUpBtnWrapper>
      </RegistrationFormWrapper>
    </RegistrationWrapper>
  );
};

export default Registration;

const RegistrationWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
`;

const RegistrationFormWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SignUpBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  height: 3rem;
  justify-content: space-between;
`;
