import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import CommunityPreview from '../../components/communities/CommunityPreview';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useState } from 'react';
import Footer from '../../components/Footer';
import CommunityTab from '../../components/communities/CommunityTab';

import InputBasic from '../../components/InputBasic';
import TapMenuSection from '../../components/communities/TapMenuSection';
import PageSubTitle from '../../components/PageSubTitle';

const Community = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(['', '']);

  const MyCommunities = [
    {
      title: '가족 여행',
      countMember: 4,
      description: '5월의 여수 여행',
      date: '2024.05.10',
      hashTag: ['#여수', '#바다'],
    },
    {
      title: '가족 여행2',
      countMember: 4,
      description: '5월의 부산 여행',
      date: '2024.05.10',
      hashTag: ['#여수', '#바다'],
    },
  ];

  const tabMenu = ['My Communities', 'All Communities'];

  const tab = tabMenu.map((menu, index) => {
    return (
      <CommunityTab
        text={menu}
        key={index}
        selected={menu}
        action={() => {
          console.log('click', index);
        }}
      />
    );
  });

  const myCommunities = MyCommunities.map((community, index) => {
    return <CommunityPreview {...community} key={index} />;
  });

  const allCommunities = MyCommunities.map((community, index) => {
    return <CommunityPreview {...community} key={index} />;
  });

  return (
    <CommunityWrapper>
      <Header
        vertical={0}
        horizontal={1.0}
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
            icon={<i className="bi bi-plus-circle"></i>}
            action={() => {
              navigate('');
            }}
          />
        }
      />
      <Main>
        <SearchInputWrapper>
          <InputBasic text={'Search here'} height={3} searchIcon={true} />
        </SearchInputWrapper>
        <TapMenuSection tab={tab} />
        <Hr />
        <CommunityComponentsSection>
          <PageSubTitle title={'My Communities'} />
          <PreviewWrapper>{myCommunities}</PreviewWrapper>
        </CommunityComponentsSection>
        <CommunityComponentsSection>
          <PageSubTitle title={'All Communities'} />
          <PreviewWrapper>{allCommunities}</PreviewWrapper>
        </CommunityComponentsSection>
      </Main>
      <Footer></Footer>
    </CommunityWrapper>
  );
};

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
`;

const PreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  min-height: 26vh;
`;

const Hr = styled.hr`
  margin: 0 -1rem;
  background: ${Palette.TabBorderBottom};
  height: 1px;
  border: 0;
`;

const CommunityWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Main = styled.div`
  margin: 4rem 0;
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
