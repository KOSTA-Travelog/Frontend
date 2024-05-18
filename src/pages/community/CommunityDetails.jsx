import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Footer from '../../components/Footer';
import { useState } from 'react';
import SettingModal from '../../components/communities/Modals/SettingModal';
import Introduction from '../../components/communities/communityDetails/Introduction';
import PostImages from '../../components/communities/communityDetails/PostImages';

const CommunityDetails = () => {
  const navigate = useNavigate();

  const community = {
    communityTitle: '가족 여행',
    communityDescription:
      '가족들과 국내 여행을 다녀왔다. 가을 여행이라 날씨가 너무 좋았다.',
    communityHashTag: ['여수', '바다'],
    communityDate: '2024.05.10',
    communityImage:
      'https://images.unsplash.com/photo-1578023110180-ee277d6d95c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  const countMember = 4;

  const [settingModal, setSettingModal] = useState({
    manager: false,
    member: false,
  });

  const managerSetting =
    settingModal['manager'] === true ? (
      <SettingModal
        icon={<i className="bi bi-people"></i>}
        text={'커뮤니티 관리'}
      />
    ) : (
      ''
    );

  const memberSetting =
    settingModal['member'] === true ? (
      <SettingModal
        icon={<i className="bi bi-arrow-bar-right"></i>}
        text={'커뮤니티 탈퇴'}
      />
    ) : (
      ''
    );

  return (
    <CommunityDetailsWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate(-1)}
          />
        }
        right={
          <HeaderButton
            icon={<i className="bi bi-gear"></i>}
            action={() => {
              setSettingModal({
                manager: !settingModal['manager'],
                member: false,
              });
            }}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>{community.communityTitle}</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <Introduction {...community} countMember={countMember} />
        <Line>
          <Hr />
          <CountPosts>게시글 2222건</CountPosts>
        </Line>
        <PostImages />
      </Main>
      <Footer />
      {managerSetting}
      {memberSetting}
    </CommunityDetailsWrapper>
  );
};

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 1rem;
`;
const Hr = styled.hr`
  margin: 0 -1rem;
  background: ${Palette.TextSecondary};
  height: 1px;
  border: 0;
  width: 100%;
`;

const CountPosts = styled.p`
  color: ${Palette.TextSecondary};
  min-width: 25%;
  padding-right: 0.2rem;
`;

const CommunityDetailsWrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
`;

const Main = styled.div`
  width: 100%;
  padding: 4rem 0;
`;

export default CommunityDetails;
