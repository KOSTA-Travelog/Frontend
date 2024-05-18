import React from 'react';
import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';

const Profile = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImg />
      </ProfileImageWrapper>
      <InformationWrapper>
        <NicknameWrapper>
          <Nickname>{props.nickname}</Nickname>
        </NicknameWrapper>
        <EmailBioWrapper>
          <EmailWrapper>
            <Email>{props.email}</Email>
          </EmailWrapper>
          <BioWrapper>
            <Bio>{props.bio}</Bio>
          </BioWrapper>
        </EmailBioWrapper>
      </InformationWrapper>
    </ProfileWrapper>
  );
};

Profile.prototype = {
  nickname: PropTypes.string,
  email: PropTypes.string,
  bio: PropTypes.string,
};

const ProfileWrapper = styled.div`
  min-height: 29vh;
  padding: 1.2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InformationWrapper = styled.div`
  width: 100%;
  min-height: 10.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImageWrapper = styled.div`
  width: 6.5rem;
  height: 1rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  aspect-ratio: 1;
  background-size: cover;
  border-radius: 100px;
`;

const NicknameWrapper = styled.div`
  height: 1rem;
`;

const Nickname = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 144%;
  text-align: center;
`;

const EmailBioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 7vh;
`;

const EmailWrapper = styled.div`
  height: 1rem;
`;

const Email = styled.p`
  color: ${Palette.TextSecondary};
  text-align: center;
`;

const BioWrapper = styled.div``;

const Bio = styled.p`
  font-weight: 300;
  line-height: 144%;
  text-align: center;
`;

export default Profile;
