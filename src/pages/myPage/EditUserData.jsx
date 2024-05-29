import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import ProfileImg from '../../components/myPage/ProfileImg';
import RoundButton from '../../components/RoundButton';
import LabeledInput from '../../components/LabeledInput';
import { useEffect, useState } from 'react';
import { axiosEditUserInfo, axiosUserInfo } from '../../apis/User';
import { hashingPassword } from '../auth/Login';

const EditUserData = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('password');
  const [checkPassword, setCheckPassword] = useState('check password');

  const bioItem = {
    id: 'bio',
    item: '소개',
    editInput: true,
    type: 'textArea',
  };
  const nameItem = {
    id: 'name',
    item: '이름*',
    editInput: true,
    type: 'input',
  };

  const nicknameItem = {
    id: 'nickname',
    item: '닉네임*',
    editInput: true,
    type: 'input',
  };

  const passwordItem = { item: '비밀번호*', text: 'password', type: 'input' };

  const CheckPasswordItem = {
    item: '비밀번호 확인*',
    type: 'input',
  };

  const phoneNumberItem = {
    item: '전화번호*',
    editInput: true,
    type: 'input',
  };

  useEffect(() => {
    axiosUserInfo().then((res) => {
      const data = JSON.parse(res.data.data.data);
      setBio(data.bio);
      setName(data.name);
      setEmail(data.email);
      setNickname(data.nickname);
      setPhoneNumber(data.phoneNumber);
      setProfileImage(data.profileImage);
    });
  }, []);

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
          <ImgWRapper>
            <i className="bi bi-pencil-fill"></i>
          </ImgWRapper>
          <ProfileImg />
          <Email>{email}</Email>
        </ProfileWrapper>
        <InputItemWrapper>
          <LabeledInput
            {...bioItem}
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
          <LabeledInput
            {...nameItem}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <LabeledInput
            {...nicknameItem}
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <LabeledInput
            {...passwordItem}
            text={password}
            onChange={async (e) => {
              setPassword(await hashingPassword(e.target.value));
            }}
          />
          <LabeledInput
            {...CheckPasswordItem}
            text={checkPassword}
            onChange={async (e) => {
              setCheckPassword(await hashingPassword(e.target.value));
            }}
          />
          <LabeledInput
            {...phoneNumberItem}
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </InputItemWrapper>
        <ButtonWrapper>
          <RoundButton
            text={'수정 완료'}
            type={'primary'}
            action={async () => {
              await axiosEditUserInfo({
                name: name,
                nickname: nickname,
                profileImage: profileImage,
                password: password,
                phoneNumber: phoneNumber,
                bio: bio,
                passwordCheck: checkPassword,
                userId: JSON.parse(sessionStorage.getItem('userId')),
              });
              navigate('/myPage/profile');
            }}
          />
          <RoundButton
            text={'회원 탈퇴'}
            type={'underline'}
            action={() => {}}
          />
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

const ImgWRapper = styled.button`
  width: 6.5rem;
  height: 6.5rem;
  position: absolute;
  border-radius: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(0, 0, 0, 0.45);
    color: ${Palette.BodyPrimary};
  }
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
