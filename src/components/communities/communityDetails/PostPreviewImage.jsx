import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PostPreviewImage = (props) => {
  const navigate = useNavigate();

  return (
    <Post
      style={{
        backgroundImage: 'url(' + `${props.postImage}` + ')',
      }}
      onClick={() => {
        navigate(`/feed/${props.postId}`);
      }}
    ></Post>
  );
};

const Post = styled.div`
  width: 6.87rem;
  aspect-ratio: 1;
  background-size: cover;
`;

PostPreviewImage.prototype = {
  postImage: PropTypes.string,
  postId: PropTypes.string,
};

export default PostPreviewImage;
