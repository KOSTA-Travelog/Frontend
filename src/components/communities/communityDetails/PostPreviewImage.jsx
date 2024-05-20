import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const PostPreviewImage = (props) => {
  return (
    <Post
      style={{
        backgroundImage: 'url(' + `${props.postImage}` + ')',
      }}
    ></Post>
  );
};

const Post = styled.div`
  /* width: 8rem; */
  width: 33%;
  aspect-ratio: 1;
  background-size: cover;
`;

PostPreviewImage.prototype = {
  postImage: PropTypes.string,
};

export default PostPreviewImage;
