import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';
import ProfileImg from './ProfileImg';

const Profile = (props) => {
  return (
    <ProfileWrapper>
      <ProfileImg />
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
  min-height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InformationWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
