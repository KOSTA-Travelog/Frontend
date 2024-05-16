import PropTypes from "prop-types";
import styled from "styled-components";
import Palette from "../../styles/Palette.jsx";

const Article = styled.article`
  padding: 1.5rem;
  background-color: ${Palette.BodyPrimary};
`;

const FeedInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const FeedDate = styled.p`
  color: ${Palette.TextSecondary}
`

const FeedIconGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  height: 1rem;
  font-size: 1rem;
`

const Divider = styled.hr`
  width: 100%;
  margin: auto;
`

const FeedContent = styled.pre`
  width: 100%;
  white-space: break-spaces;
`

const FeedOpenStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.25rem;
`

const FeedComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 1rem 0;
  gap: 1rem;
`

const CommentExpander = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ExpanderText = styled.p`
  height: 1rem;
  white-space: nowrap;
  padding-left: 1rem;
`

const GenerateOpenStatus = ({openStatus}) => {
  if (openStatus === "public") {
    return <>
      <i className="bi bi-globe"></i>
      전체 공개
    </>
  } else if (openStatus === "group") {
    return <>
      <i className="bi bi-people-fill"></i>
      커뮤니티 공개
    </>
  } else if (openStatus === "private") {
    return <>
      <i className="bi bi-lock"></i>
      비공개
    </>
  } else {
    return <>
      <i className="bi bi-question"></i>
    </>
  }
}

GenerateOpenStatus.propTypes = {
  openStatus: PropTypes.string,
}

const Feed = (props) => {
  return (
      <>
        <div style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "20rem",
        }}>

        </div>
        <Article>
          <FeedInfo>
            <FeedDate>
              {props.date}
            </FeedDate>
            <FeedIconGroup>
              <i className="bi bi-share"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-heart"></i>
            </FeedIconGroup>
          </FeedInfo>
          <FeedContent>
            {props.content}
          </FeedContent>
          <FeedOpenStatus>
            <GenerateOpenStatus openStatus={props.openStatus}/>
          </FeedOpenStatus>
          <FeedComment>
            <CommentExpander onClick={() => {

            }}>
              <Divider>
              </Divider>
              <ExpanderText>
                댓글 8개 더보기
              </ExpanderText>
            </CommentExpander>
            <div>

            </div>
          </FeedComment>
        </Article>
      </>
  )
}

Feed.propTypes = {
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  openStatus: PropTypes.string,
}

export default Feed;