import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import InputBasic from '../../components/InputBasic';
import PageSubTitle from '../../components/PageSubTitle';
import { axiosAllCommunityList } from '../../apis/Community';
import { useEffect, useState } from 'react';
import CommunityPreview from '../../components/communities/CommunityPreview';
import { useNavigate } from 'react-router-dom';

const CommunityForGuest = () => {
  const navigate = useNavigate();

  const [communityList, setCommunityList] = useState([]);

  useEffect(() => {
    axiosAllCommunityList().then((res) => {
      setCommunityList(JSON.parse(res.data.data.data));
    });
  }, []);

  const allCommunities = communityList.map((data) => {
    return (
      <CommunityPreview
        {...data}
        key={data['communityId']}
        onClick={() => {
          if (data['userId'] == null) {
            navigate(`/community/detail?id=${data['communityId']}`);
          } else {
            navigate(
              `/community/detail?id=${data['communityId']}&userId=${data['userId']}`
            );
          }
        }}
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
      />
      <Main>
        <SearchInputWrapper>
          <InputBasic text={'Search here'} height={3} searchIcon={true} />
        </SearchInputWrapper>
        <Hr />
        <Section>
          <PageSubTitle title={'All Communities'} />
          <PreviewWrapper>{allCommunities}</PreviewWrapper>
        </Section>
      </Main>
      <Footer></Footer>
    </CommunityWrapper>
  );
};

const SearchInputWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-left: -0.5rem; */
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

const Section = styled.section`
  width: 100%;
  min-height: 1.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
`;

const PreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  min-height: 26vh;
`;

export default CommunityForGuest;
