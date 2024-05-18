import React from 'react';
import styled from 'styled-components';
import PostPreviewImage from './PostPreviewImage';

const PostImages = () => {
  const postImage =
    'https://images.unsplash.com/photo-1527142879-95b61a0b8226?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  return (
    <Contents>
      <PostRow>
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
      </PostRow>
      <PostRow>
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
      </PostRow>
      <PostRow>
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
      </PostRow>
      <PostRow>
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
      </PostRow>
      <PostRow>
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
        <PostPreviewImage postImage={postImage} />
      </PostRow>
    </Contents>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PostRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

export default PostImages;
