import styled from 'styled-components';
import PostPreviewImage from './PostPreviewImage';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PostImages = (props) => {
  return (
    <Contents>
      {props.postList.map((data, i) => (
        <PostPreviewImage
          key={i}
          postImage={data['image']}
          postId={data['postId']}
        />
      ))}
    </Contents>
  );
};

PostImages.propTypes = {
  postList: PropTypes.array,
};

const Contents = styled.div`
  width: 102%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const PostRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 0.8rem;
`;

export default PostImages;
