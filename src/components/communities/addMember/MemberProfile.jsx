import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import { PropTypes } from 'prop-types';

const MemberProfile = (props) => {
  return (
    <ProfileWrapper>
      <Img src={props.profileImage} />
      <UserInfo>
        <Nickname>{props.nickname}</Nickname>
        <Bio>{props.bio}</Bio>
      </UserInfo>
      <BtnWrapper>
        <Button
          color={props.buttonColor}
          text={props.buttonText}
          height={props.buttonHeight}
          onClick={props.action}
        />
      </BtnWrapper>
    </ProfileWrapper>
  );
};

MemberProfile.propTypes = {
  profileImage: PropTypes.string,
  nickname: PropTypes.string,
  bio: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHeight: PropTypes.number,
  action: PropTypes.func,
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100px;
`;

const UserInfo = styled.div`
  width: 8rem;
`;

const BtnWrapper = styled.div`
  width: 7rem;
`;
const Nickname = styled.p``;

const Bio = styled.p``;
export default MemberProfile;
