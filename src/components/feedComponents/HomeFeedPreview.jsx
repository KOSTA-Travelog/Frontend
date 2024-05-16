import PropTypes from "prop-types";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

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
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  white-space: nowrap;
  overflow: clip;
  text-overflow: ellipsis;
  max-width: 100%;
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

const FeedInfoGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const FeedInfo = styled.div`
  min-width: 2rem;
  display: flex;
  gap: 0.25rem;
  font-size: 1rem;
`

const FeedInfoIcon = styled.i`
  font-style: normal;
`

const HomeFeedPreview = (props) => {
  const navigate = useNavigate()
  return (<>
    <FeedContent onClick={() => {
      navigate(`/feed/${props.feedId}`);
    }}>
      <FeedImage src={props.image}/>
      <Title>{props.title}</Title>
    </FeedContent>
    <FeedFooter>
      <Profile onClick={() => location.href = `/profile/${props.userName}`}>
        {<ProfileImage src={props.userImg}/>}
        <div>{props.userName}</div>
      </Profile>
      <FeedInfoGroup>
        <FeedInfo onClick={() => {
        }}>
          <FeedInfoIcon className="bi bi-heart"/>
          {props.likeCount}
        </FeedInfo>
        <FeedInfo onClick={() => {
          navigate(`/feed/${props.feedId}#comment`);
        }}>
          <FeedInfoIcon className="bi bi-chat"/>
          {props.replyCount}
        </FeedInfo>
      </FeedInfoGroup>
    </FeedFooter>
  </>);
}

HomeFeedPreview.propTypes = {
  image: PropTypes.string,
  userName: PropTypes.string,
  userImg: PropTypes.string,
  title: PropTypes.string,
  likeCount: PropTypes.number,
  replyCount: PropTypes.number,
  feedId: PropTypes.number,
}

export default HomeFeedPreview;