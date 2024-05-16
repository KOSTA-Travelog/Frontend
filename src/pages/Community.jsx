import React, { useEffect } from 'react';
import styled from 'styled-components';
import Palette from '../styles/Palette';
import InputBasic from '../components/InputBasic';
import CommunityPreview from '../components/communities/CommunityPreview';
import CommunitySubTitle from '../components/communities/CommunitySubTitle';
import Header, { HeaderTitle } from '../components/headerComponents/Header';
import HeaderButton from '../components/headerComponents/HeaderButton';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();

  const MyCommunities = [
    {
      title: '가족 여행',
      countMember: 4,
      description: '5월의 여수 여행',
      date: '2024.05.10',
    },
    {
      title: '가족 여행2',
      countMember: 4,
      description: '5월의 부산 여행',
      date: '2024.05.10',
    },
  ];

  const communityData = MyCommunities.map((community, index) => {
    return (
      <CommunityPreview
        title={community['title']}
        countMember={community['countMember']}
        description={community['description']}
        date={community['date']}
        key={index}
      />
    );
  });

  return (
    <CommunityWrapper>
      <Header
        vertical={0}
        horizontal={1.5}
        left={
          <HeaderTitle
            align={'flex-start'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>Community</b>
              </h2>
            }
          />
        }
        right={
          <HeaderButton
            icon={<i class="bi bi-plus-circle"></i>}
            action={() => {
              navigate('');
            }}
          />
        }
      />
      <CommunityTabSection>
        <InputBasic text={'Search here'} className={'searchInput'} />
        <TabWrapper>
          <FirstTabMenuWrapper>
            <FirstTabMenu>My Communities</FirstTabMenu>
            <Focus></Focus>
          </FirstTabMenuWrapper>
          <SecondTabMenuWrapper>
            <SecondTabMenu>All Communities</SecondTabMenu>
            <Focus></Focus>
          </SecondTabMenuWrapper>
        </TabWrapper>
      </CommunityTabSection>
      <HR />
      <CommunityComponentsSection>
        <CommunitySubTitle title={'My Communities'} />
        {communityData}
      </CommunityComponentsSection>
      <CommunityComponentsSection>
        <CommunitySubTitle title={'All Communities'} />
        {communityData}
      </CommunityComponentsSection>
    </CommunityWrapper>
  );
};

const HR = styled.hr`
  margin: 0 -2rem;
  background: ${Palette.TabBorderBottom};
  height: 1px;
  border: 0;
`;

const CommunityWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const CommunityTabSection = styled.section`
  width: 100%;
  background-color: ${Palette.BodyPrimary};
  /* position: fixed;
  display: flex;
  flex-direction: column;
  height: 8rem;
  z-index: 200; */
`;

const TabWrapper = styled.article`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
`;

const Focus = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: ${Palette.Primary};
`;

const FirstTabMenuWrapper = styled.div`
  width: 8.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FirstTabMenu = styled.div`
  height: 1rem;
  color: ${Palette.Primary};
`;

const SecondTabMenuWrapper = styled.div`
  width: 8.5rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondTabMenu = styled.div`
  height: 1rem;
  color: ${Palette.Primary};
`;

const CommunityComponentsSection = styled.section`
  width: 100%;
  min-height: 1.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
`;

export default Community;
