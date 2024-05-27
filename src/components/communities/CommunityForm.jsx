import styled from 'styled-components';
import LabeledInput from '../LabeledInput';
import HashTag from '../HashTag';
import Palette from '../../styles/Palette';
import { useState } from 'react';
import Introduction from './communityDetails/Introduction';

const CommunityForm = (props) => {
  const [openStatus, setOpenStatus] = useState(true);
  const [title, setTitle] = useState('');
  const [Introduction, setIntroduction] = useState('');
  const [hashtag, setHashtag] = useState('');

  const titleInput = {
    item: '제목*',
    text: '제목을 입력하세요',
    editInput: false,
    type: 'input',
    onChange: (e) => {
      setTitle(e.target.value);
    },
  };

  const IntroductionInput = {
    item: '소개글',
    text: '내용을 입력하세요',
    editInput: false,
    type: 'textArea',
    height: 12,
    onChange: (e) => {
      setIntroduction(e.target.value);
    },
  };

  const hashtagInput = {
    item: '해시태그',
    text: '#해시태그',
    editInput: false,
    type: 'input',
    onChange: (e) => {
      setHashtag(e.target.value);
    },
  };
  console.log(sessionStorage.getItem('userId'));

  const params = {
    communityTitle: title,
    communityDescription: Introduction,
    communityHashtag: hashtag,
    // communityImage:,
    communityStatus: openStatus ? 1 : 0,
    // userId:
  };

  const hashTagList = (hashtag || '').split('#').slice(1);

  const hashTagData = hashTagList.map((tag, index) => {
    return <HashTag text={'#' + tag.trim()} key={index} />;
  });

  return (
    <FormWrapper>
      <ImageWrapper>
        <Img></Img>
      </ImageWrapper>
      <LabeledInput {...titleInput} />
      <DescriptionWrapper>
        <LabeledInput {...IntroductionInput} />
      </DescriptionWrapper>
      <HashtagInputWrapper>
        <LabeledInput {...hashtagInput} />
        <HashTagWrapper>{hashTagData}</HashTagWrapper>
      </HashtagInputWrapper>
      <OpenStatusWrapper>
        <OpenStatusLabel>공개 여부*</OpenStatusLabel>
        <OpenStatusButtonWrapper>
          <OpenStatus>공개</OpenStatus>
          <OpenStatusInputButton
            type="checkbox"
            id="switch"
            onChange={() => {
              setOpenStatus(!openStatus);
            }}
          />
          <Label htmlFor="switch"></Label>
        </OpenStatusButtonWrapper>
      </OpenStatusWrapper>
      <AddMemberWrapper>
        <AddMemberLabel>멤버 추가</AddMemberLabel>
        <InfoWrapper>
          <PersonIconWrapper>
            <PersonIcon className="bi bi-person-fill" />
          </PersonIconWrapper>
          <CountPerson>4</CountPerson>
        </InfoWrapper>
      </AddMemberWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DescriptionWrapper = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Img = styled.img`
  height: 8rem;
  width: 100%;
  border: 1px solid ${Palette.InputBorder};
  border-radius: 10px;
`;

const HashtagInputWrapper = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HashTagWrapper = styled.div`
  display: flex;

  flex-direction: row;
  gap: 0.3rem;
`;

const OpenStatusWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
`;

const OpenStatusLabel = styled.span`
  font-size: 16px;
`;

const OpenStatusButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 4.8rem;
  justify-content: space-between;
  align-items: center;
`;

const OpenStatus = styled.span``;

const OpenStatusInputButton = styled.input`
  display: none;

  &#switch:checked + label {
    background: rgba(109, 104, 107);
  }

  &#switch:checked + label::after {
    left: calc(100% - 25px);
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 45px;
  height: 25px;
  background: #d3d3d3;
  border-radius: 60px;
  transition: background 0.4s;

  &::after {
    content: '';
    position: absolute;
    left: 2.5px;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #fff;
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
  }

  ::before {
    content: 'OFF';
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.4s;
  }

  #switch:checked + label::before {
    content: 'ON';
    color: #fff;
    left: 15px;
  }
`;

const AddMemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 6vh;
  align-items: center;
`;

const AddMemberLabel = styled.span`
  font-size: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 2rem;
  align-items: center;
`;

const PersonIconWrapper = styled.div`
  font-size: 1.3rem;
`;

const PersonIcon = styled.i`
  color: ${Palette.TextSecondary};
`;

const CountPerson = styled.p``;

export default CommunityForm;
