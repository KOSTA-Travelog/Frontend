import styled from 'styled-components';
import PageSubTitle from '../../PageSubTitle';
import Button from '../../Button';
import { PropTypes } from 'prop-types';

const MemberList = (props) => {
  return (
    <Wrapper>
      <PageSubTitle title={props.title} />
      <MemberListWrapper>
        <ProfileWrapper>
          <Img />
          <UserInfo>
            <Nickname>user name</Nickname>
            <Bio>user bio</Bio>
          </UserInfo>
          <BtnWrapper>
            <Button
              color={props.buttonColor}
              text={props.buttonText}
              height={props.buttonHeight}
            />
          </BtnWrapper>
        </ProfileWrapper>
      </MemberListWrapper>
    </Wrapper>
  );
};

MemberList.prototype = {
  title: PropTypes.String,
  buttonColor: PropTypes.String,
  buttonText: PropTypes.String,
  buttonHeight: PropTypes.Number,
};

const Wrapper = styled.div``;

const MemberListWrapper = styled.div``;

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
  width: 7.8rem;
`;
const Nickname = styled.p``;

const Bio = styled.p``;

export default MemberList;
