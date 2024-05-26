import React from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import Footer from '../components/Footer';
import Header from '../components/headerComponents/Header';
import HeaderButton from '../components/headerComponents/HeaderButton';
import LabeledInput from '../components/LabeledInput';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import HashTag from '../components/HashTag';

const FeedPageWrite = (props) => {
  const navigate = useNavigate();

  const hashtagInput = {
    item: '해시태그',
    text: '#해시태그',
    editInput: false,
    type: 'input',
  };

  const hashTag = [
    {
      text: '#해시태그',
    },
    {
      text: '#해시태그',
    },
  ];

  const hashtagList = hashTag.map((tag, index) => {
    return <HashTag {...tag} key={index} />;
  });

  return (
    <FeedWriteWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
      />
      <Main>
        <HashtagInputWrapper>
          <LabeledInput {...hashtagInput} />
          <HashTagWrapper>{hashtagList}</HashTagWrapper>
        </HashtagInputWrapper>
        <Button text={'게시글 등록'} color={Palette.Primary} />
      </Main>
      <Footer />
    </FeedWriteWrapper>
  );
};

const FeedWriteWrapper = styled.div``;

const HashtagInputWrapper = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  margin: 4rem 0;
`;

const HashTagWrapper = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.3rem;
`;

export default FeedPageWrite;
