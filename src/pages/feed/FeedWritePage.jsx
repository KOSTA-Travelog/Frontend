import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Palette from '../../styles/Palette.jsx';
import Footer from '../../components/Footer.jsx';
import Header from '../../components/headerComponents/Header.jsx';
import HeaderButton from '../../components/headerComponents/HeaderButton.jsx';
import LabeledInput from '../../components/LabeledInput.jsx';
import Button from '../../components/Button.jsx';
import { useNavigate } from 'react-router-dom';
import HashTag from '../../components/HashTag.jsx';
import {
  PostStatusRadio,
  PostStatusRadioGroup,
} from '../../components/PostStatusRadio.jsx';
import { BootstrapIcon } from '../../components/BootstrapIcon.jsx';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

const FeedWritePage = (props) => {
  const navigate = useNavigate();

  const hashtagInput = {
    item: '해시태그',
    text: '#해시태그',
    editInput: false,
    inputStyle: 'input',
    onChange: (e) => {
      setRawHashTag(e.target.value);
    },
  };

  const [hashTag, setHashTag] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState('0');
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [openStatus, setOpenStatus] = useState('1');
  const [statusText, setStatusText] = useState('');
  const [rawHashTag, setRawHashTag] = useState('');
  const [file, setFile] = useState([]);

  useEffect(() => {
    setStatusText(statusValue(openStatus));
  }, [openStatus, statusText]);

  useEffect(() => {
    setHashTag(
      rawHashTag.split(/[#|,]/).map((t) => {
        const text = t.trim();
        if (text === '') {
          return '';
        }
        return text.startsWith('#') ? text : '#' + text;
      })
    );
  }, [rawHashTag]);

  useEffect(() => {
    // axiosMyCommunityList().then((res) => {
    //   console.log(res.data);
    // });
  }, []);

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
    return <HashTag text={text} key={index} />;
  });

  const feedConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/api/posts/create',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      postTitle: postTitle,
      postDescription: postContent,
      postHashtag: encodeURI(hashTag.join()),
      postStatus: openStatus,
    },
  };

  const imageConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const postingImage = async (postId) => {
    const formData = new FormData();
    file.forEach((f) => {
      formData.append('' + f.name, f);
    });
    formData.append('postId', postId);
    await axios
    .post('/api/posts/image', formData, imageConfig)
    .then((res) => {
      console.log(JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const postingFeed = () => {
    axios
      .request(feedConfig)
      .then(async (resp) => {
        console.log(resp);
        // const json = JSON.parse(resp.data);
        // console.log(json);
        const postId = await resp.data.data.data;
        console.log(postId);
        await postingImage(await postId).then(() => {
          location.href = '/';
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = async (e) => {
    console.log(e.target.files);

    setFile([...file, ...Array.from(e.target.files)]);
  };
  const removeFile = (key) => {
    const filteredFile = file.filter((item) => item !== key);
    setFile(filteredFile);
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
            if (postTitle.length > 0 && postContent.length > 0) {
              postingFeed();
            }
          }}
        >
          <TitleInput
            type="text"
            name="title"
            id="userTitle"
            placeholder={'제목을 입력하세요'}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <hr />
          <PostStatusRadioGroup
            label={statusText}
            value={openStatus}
            onChange={setOpenStatus}
          >
            <PostStatusRadio value="1" display="none">
              <BootstrapIcon icon="bi-globe" />
            </PostStatusRadio>
            <PostStatusRadio value="2" display="none">
              <BootstrapIcon icon="bi-people" />
            </PostStatusRadio>
            <PostStatusRadio value="3" display="none">
              <BootstrapIcon icon="bi-eye-slash" />
            </PostStatusRadio>
          </PostStatusRadioGroup>
          <hr />

          <SelectWrapper
            name="targetCommunity"
            id="targetCommunity"
            value={selectedCommunity}
            onChange={(e) => {
              setSelectedCommunity(e.target.value);
            }}
          >
            <option value="0">커뮤니티 선택</option>
            <option value="1">comm test1</option>
            <option value="1">comm test1</option>
            <option value="1">comm test1</option>
          </SelectWrapper>
          <hr />
          <TextareaAutosize
            name="content"
            id="userContent"
            minRows="15"
            style={{ overflow: 'hidden' }}
            placeholder={'내용을 입력하세요'}
            value={postContent}
            onChange={(e) => {
              setPostContent(e.target.value);
            }}
          />

          <ImageInput type="file" onChange={handleChange} id="file" multiple />
          <ImageWrapper>
            <div>
              <UploadLabel htmlFor="file">+</UploadLabel>
            </div>
            {/*<img src={file}/>*/}
            {file.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  removeFile(item);
                }}
              >
                <ImagePreview src={URL.createObjectURL(item)} alt="" />
              </div>
            ))}
          </ImageWrapper>

          <HashtagInputWrapper>
            <LabeledInput {...hashtagInput} />
            <HashTagWrapper>{hashtagList}</HashTagWrapper>
          </HashtagInputWrapper>
          <Button text={'게시글 등록'} color={Palette.Primary} />
        </CreatePostForm>
      </Main>
      <Footer />;
    </FeedWriteWrapper>
  );
};

const TitleInput = styled.input`
  width: 100%;
  /* fontWeight: 'bold'; */
  font-size: 1.3rem;
  border: none;
`;

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

const PostContent = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 15em;

  padding: 1rem;
  box-shadow: ${Palette.ShadowBody};
`;

const ImageInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const UploadLabel = styled.label`
  width: 100px;
  aspect-ratio: 1;
  display: flex;
  text-align: center;
  font-size: 2rem;
  color: ${Palette.Primary};
  cursor: pointer;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  border: 0.25rem solid ${Palette.Primary};
`;

const ImagePreview = styled.img`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 1rem;
`;

const ImageWrapper = styled.div`
  padding: 1rem 0;
  height: 150px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
`;

export default FeedWritePage;
