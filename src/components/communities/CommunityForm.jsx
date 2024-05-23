import styled from 'styled-components';
import LabeledInput from '../LabeledInput';
import HashTag from '../HashTag';
import Palette from '../../styles/Palette';

const CommunityForm = (props) => {
  const titleInput = {
    item: '제목*',
    text: '제목을 입력하세요',
    editInput: false,
    type: 'input',
  };

  const descriptionInput = {
    item: '소개글',
    text: '내용을 입력하세요',
    editInput: false,
    type: 'textArea',
    height: 12,
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
    <FormWrapper>
      <ImageTitleWrapper>
        <ImageWrapper>
          <Img />
        </ImageWrapper>
        <LabeledInput {...titleInput} />
      </ImageTitleWrapper>
      <DescriptionWrapper>
        <LabeledInput {...descriptionInput} />
        <HashTagWrapper>{hashtagList}</HashTagWrapper>
      </DescriptionWrapper>
      <OpenStatusWrapper>
        <OpenStatusLabel>공개 여부*</OpenStatusLabel>
        <OpenStatusButtonWrapper>
          <OpenStatus>공개</OpenStatus>
          <OpenStatusInputButton type="checkbox" id="switch" />
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

const FormWrapper = styled.div``;

const DescriptionWrapper = styled.div``;

const ImageTitleWrapper = styled.div``;

const ImageWrapper = styled.div``;

const Img = styled.img``;

const HashTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

const OpenStatusWrapper = styled.div``;

const OpenStatusLabel = styled.span``;

const OpenStatusButtonWrapper = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

const AddMemberWrapper = styled.div``;

const AddMemberLabel = styled.span``;

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
