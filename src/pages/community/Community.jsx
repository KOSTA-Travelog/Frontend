import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import CommunityPreview from '../../components/communities/CommunityPreview';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import InputBasic from '../../components/InputBasic';
import CommunitySubTitle from '../../components/communities/CommunitySubTitle';
import CommunityTab from '../../components/communities/CommunityTab';
import { useState } from 'react';
import HashTag from '../../components/HashTag';

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
        onClick={() => {
          console.log('click', index);
          // let arr = [...menu];
          // arr[index] = 'selected';
          // setMenu([...arr]);
        }}
      />
    );
  });

  const myCommunities = MyCommunities.map((community, index) => {
    return (
      <CommunityPreview
        title={community['title']}
        countMember={community['countMember']}
        description={community['description']}
        date={community['date']}
        key={index}
        hashTag={community['hashTag']}
      />
    );
  });

  const AllCommunities = MyCommunities.map((community, index) => {
    return (
      <CommunityPreview
        title={community['title']}
        countMember={community['countMember']}
        description={community['description']}
        date={community['date']}
        key={index}
        hashTag={community['hashTag']}
      />
    );
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
        <CommunityTabSection>
          <InputBasic text={'Search here'} height={3} searchIcon={true} />
          <TabWrapper>{tab}</TabWrapper>
        </CommunityTabSection>
        <Hr />
        <CommunityComponentsSection>
          <CommunitySubTitle title={'My Communities'} />
          {myCommunities}
        </CommunityComponentsSection>
        <CommunityComponentsSection>
          <CommunitySubTitle title={'All Communities'} />
          {AllCommunities}
        </CommunityComponentsSection>
      </Main>
    </CommunityWrapper>
  );
};

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

const CommunityTabSection = styled.section`
  width: 100%;
  background-color: ${Palette.BodyPrimary};
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

const TabWrapper = styled.article`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 2rem;
  align-items: center;
`;

export default Community;
