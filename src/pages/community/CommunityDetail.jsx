import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate } from 'react-router-dom';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Footer from '../../components/Footer';
import { useState } from 'react';
import SettingModal from '../../components/communities/SettingModal';
import Introduction from '../../components/communities/communityDetails/Introduction';
import PostImages from '../../components/communities/communityDetails/PostImages';
import Divider from '../../components/communities/communityDetails/Divider';

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
    type: 'manager',
    status: false,
  });

  const settingStatus = settingModal['status'] === true && (
    <SettingModal type={settingModal} />
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
              setSettingModal((prevState) => ({
                ...prevState,
                status: !prevState.status,
              }));
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
      <SettingWrapper>{settingStatus}</SettingWrapper>
      <Main>
        <Introduction {...community} countMember={countMember} />
        <Divider number={2222} />
        <PostImages />
      </Main>
      <Footer />
    </CommunityDetailsWrapper>
  );
};

const SettingWrapper = styled.div`
  position: absolute;
  z-index: 200;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 27px;

  @media (min-width: 900px) {
    width: 95%;
  }
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
