import PropTypes from "prop-types";
import styled from "styled-components";

const FeedContent = styled.div`
`

const FeedImage = styled.img`
  border-radius: 0.8rem;
  width: 100%;
  height: auto;
  min-height: 10rem;
`

const Title = styled.div`
  display: flex;
  margin: 0.5rem;
  height: 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  align-items: center;
`

const FeedFooter = styled.div`
  height: 1rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ProfileImage = styled.img`
  border-radius: 1rem;
  width: 1rem;
  height: 1rem;
`
const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`

const UserName = styled.div`
`

const FeedInfoGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const FeedInfo = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 1rem;
`

const FeedInfoIcon = styled.i`
  font-style: normal;
`

const HomeFeed = (props) => {
  return (<>
    <FeedContent>
      <FeedImage src={props.image}/>
      <Title>{props.title}</Title>
    </FeedContent>
    <FeedFooter>
      <Profile onClick={() => location.href = `/profile/${props.userName}`}>
        {<ProfileImage src={props.userImg}/>}
        <UserName>{props.userName}</UserName>
      </Profile>
      <FeedInfoGroup>
        <FeedInfo>
          <FeedInfoIcon className="bi bi-heart"/>
          {props.likeCount}2
        </FeedInfo>
        <FeedInfo>
          <FeedInfoIcon className="bi bi-chat"/>
          {props.replyCount}2
        </FeedInfo>
      </FeedInfoGroup>
    </FeedFooter>
  </>);
}

HomeFeed.propTypes = {
  image: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  title: PropTypes.string,
  likeCount: PropTypes.number,
  replyCount: PropTypes.number,
}

export default HomeFeed;