import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import EditInput from '../../components/myPage/EditInput';
import ProfileImg from '../../components/myPage/ProfileImg';
import RoundButton from '../../components/RoundButton';

const EditUserData = () => {
  const navigate = useNavigate();

  const editItemList = [
    {
      item: '소개',
      text: '저의 소개글 입니다. 여기서 수정해요',
      editInput: true,
      type: 'textArea',
    },
    { item: '이름*', text: '김선희', editInput: true, type: 'input' },
    {
      item: '닉네임*',
      text: '하이하이',
      editInput: true,
      type: 'input',
    },
    { item: '비밀번호*', text: 'Password', type: 'input' },
    { item: '비밀번호*', text: 'Confirm Password', type: 'input' },
    {
      item: '전화번호*',
      text: '010-1111-1111',
      editInput: true,
      type: 'input',
    },
  ];

  const inputItemList = editItemList.map((data, index) => {
    return <EditInput {...data} key={index} />;
  });

  return (
    <PageWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>내 정보 수정</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <ProfileWrapper>
          <ProfileImg />
          <Email>ssssssssss@gmail.com</Email>
        </ProfileWrapper>
        <InputItemWrapper>{inputItemList}</InputItemWrapper>
        <ButtonWrapper>
          <RoundButton text={'수정 완료'} type={'primary'} action={() => {}} />
          <RoundButton text={'회원 탈퇴'} type={'underline'} />
        </ButtonWrapper>
      </Main>
      <Footer />
    </PageWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
`;

const InputItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Email = styled.span`
  width: 100%;
  height: 1.2rem;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;

  text-align: center;
`;

const PageWrapper = styled.div`
  padding: 0 1.2rem;
`;

const Main = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 1.2rem;
  height: 62rem;
`;

export default EditUserData;
