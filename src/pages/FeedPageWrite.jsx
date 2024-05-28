import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import Footer from '../components/Footer';
import Header from '../components/headerComponents/Header';
import HeaderButton from '../components/headerComponents/HeaderButton';
import LabeledInput from '../components/LabeledInput';
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';
import HashTag from '../components/HashTag';
import {
  PostStatusRadio,
  PostStatusRadioGroup
} from '../components/PostStatusRadio.jsx';
import {BootstrapIcon} from '../components/BootstrapIcon.jsx';
import axios from 'axios';

const FeedPageWrite = (props) => {
  const navigate = useNavigate();

  const hashtagInput = {
    item: '해시태그',
    text: '#해시태그',
    editInput: false,
    type: 'input',
    onChange: (e) => {
      setRawHashTag(e.target.value);
    },
  };

  const [hashTag, setHashTag] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState('0');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [openStatus, setOpenStatus] = useState('1');
  const [statusText, setStatusText] = useState();
  const [rawHashTag, setRawHashTag] = useState('');

  useEffect(() => {
    setStatusText(statusValue(openStatus));
  }, [openStatus, statusText]);

  useEffect(() => {
    setHashTag(rawHashTag.split(/[#|,]/).map((t) => {
      const text = t.trim();
      if (text === '') {
        return '';
      }
      return text.startsWith('#') ? text : '#' + text;
    }));
  }, [rawHashTag]);

  const statusValue = (status) => {
    switch (status) {
      case '1':
        return '전체공개';
      case '2':
        return '커뮤니티 공개';
      case '3':
        return '비공개';
      default:
        return '';
    }
  };

  const hashtagList = hashTag.map((text, index) => {
    if (text === '') {
      return;
    }
    return <HashTag text={text} key={index}/>;
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/posts/create',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      'postTitle': postTitle,
      'postDescription': postContent,
      'postHashtag': encodeURI(hashTag.join()),
      'postStatus': openStatus,
    }
  };
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
          <CreatePostForm
              onSubmit={(e) => {
                e.preventDefault();
                console.dir(postTitle);
                console.dir(postContent);
                console.log(openStatus);
                console.log(selectedCommunity);
                console.log(hashTag);
                if (postTitle.length > 0 && postContent > 0) {
                  axios.request(config)
                  .then((response) => {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                }
              }}
          >
            <input
                style={{
                  width: '100%', fontWeight: 'bold', fontSize: '2em',
                  border: 'none'
                }}
                type="text" name="title" id="userTitle"
                placeholder={'제목을 입력하세요'}
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <hr/>
            <PostStatusRadioGroup label={statusText}
                                  value={openStatus}
                                  onChange={setOpenStatus}>
              <PostStatusRadio value="1" display="none">
                <BootstrapIcon
                    icon="bi-globe"
                />
              </PostStatusRadio>
              <PostStatusRadio value="2" display="none">
                <BootstrapIcon
                    icon="bi-people"
                />
              </PostStatusRadio>
              <PostStatusRadio value="3" display="none">
                <BootstrapIcon
                    icon="bi-eye-slash"
                />
              </PostStatusRadio>
            </PostStatusRadioGroup>
            <hr/>

            <SelectWrapper name="targetCommunity" id="targetCommunity"
                           value={selectedCommunity}
                           onChange={(e) => {
                             setSelectedCommunity(e.target.value);
                           }}
            >
              <option value="0">커뮤니티 선택</option>
              <option value="1">comm test1</option>
            </SelectWrapper>
            <hr/>
            <textarea name="content" id="userContent" cols="30" rows="10"
                      placeholder={'내용을 입력하세요'}
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
            />

            <HashtagInputWrapper>
              <LabeledInput {...hashtagInput} />
              <HashTagWrapper>{hashtagList}</HashTagWrapper>
            </HashtagInputWrapper>
            <Button text={'게시글 등록'} color={Palette.Primary}/>
          </CreatePostForm>
        </Main>
        <Footer/>
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HashTagWrapper = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.5rem;
`;

const SelectWrapper = styled.select`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border-color: ${Palette.TextTertiary};
`;

const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default FeedPageWrite;
