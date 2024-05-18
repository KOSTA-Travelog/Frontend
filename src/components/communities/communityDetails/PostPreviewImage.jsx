import React from 'react';
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
  width: 8rem;
  aspect-ratio: 1;
  object-fit: contain;
`;

PostPreviewImage.prototype = {
  postImage: PropTypes.string,
};

export default PostPreviewImage;
