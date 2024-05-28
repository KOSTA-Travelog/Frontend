import styled from 'styled-components';
import PageSubTitle from '../../PageSubTitle';
import { PropTypes } from 'prop-types';
import MemberProfile from './MemberProfile';

const MemberList = (props) => {
  const list = [...props.currentMember];
  const CommunityMember = list.map((data) => {
    const profileData = {
      communityId: data['communityId'],
      profileImage: data['profileImage'],
      nickname: data['nickname'],
      bio: data['bio'],
      buttonColor: props.buttonColor,
      buttonText: props.buttonText,
      buttonHeight: props.buttonHeight,
      action: props.action,
    };
    return <MemberProfile key={data['communityMemberId']} {...profileData} />;
  });

  return (
    <Wrapper>
      <PageSubTitle title={props.title} />
      <MemberListWrapper>{CommunityMember}</MemberListWrapper>
    </Wrapper>
  );
};

MemberList.prototype = {
  title: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHeight: PropTypes.number,
  currentMember: PropTypes.object,
  action: PropTypes.func,
};

const Wrapper = styled.div``;

const MemberListWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export default MemberList;
