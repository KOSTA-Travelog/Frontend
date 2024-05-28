import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useNavigate } from 'react-router-dom';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import InputBasic from '../../components/InputBasic';
import {
  axiosInsertCommunityMember,
  axiosSearchNickname,
} from '../../apis/Community';
import MemberProfile from '../../components/communities/addMember/MemberProfile';
import useDebounce from '../../hooks/useDebounce';

const AddMember = (props) => {
  const navigate = useNavigate();

  const queryString = new URLSearchParams(location.search);

  const [searchResult, setSearchResult] = useState([]);
  const debouncedSearchText = useDebounce(queryString.get('nickname'), 500);

  useEffect(() => {
    axiosSearchNickname(debouncedSearchText).then((res) => {
      setSearchResult(JSON.parse(res.data.data.data));
    });
  }, [debouncedSearchText]);

  const searchResultList = searchResult.map((data) => {
    return (
      <MemberProfile
        key={data['nickname']}
        profileImage={data['profileImage']}
        nickname={data['nickname']}
        bio={data['bio']}
        buttonColor={Palette.Primary}
        buttonText={'추가'}
        buttonHeight={2}
        isButton={true}
        action={() => {
          axiosInsertCommunityMember(
            sessionStorage.getItem('communityId'),
            data['nickname']
          );
        }}
      />
    );
  });

  return (
    <AddMemberWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            // /community/detail
            action={() => navigate(-1)}
          />
        }
        right={
          <HeaderButton
            icon={<i className="bi bi-check2-circle"></i>}
            action={() => {}}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>멤버 추가</b>
              </h2>
            }
          />
        }
      />
      <Main>
        <SearchInputWrapper>
          <InputBasic
            text={'사용자 검색'}
            height={3}
            // searchIcon={true}
            onChange={(e) => {
              navigate(`/community/addMember?nickname=${e.target.value}`);
            }}
          />
        </SearchInputWrapper>
        <MemberInfoWrapper>
          <SearchResultWrapper>{searchResultList}</SearchResultWrapper>
        </MemberInfoWrapper>
      </Main>
      <Footer></Footer>
    </AddMemberWrapper>
  );
};

const SearchResultWrapper = styled.div`
  width: 100%;
  min-height: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  margin-bottom: 1rem;
`;

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
`;

const MemberInfoWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
`;

const CurrentMemberWrapper = styled.div`
  min-height: 11vh;
`;

const AddMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  margin: 4rem 0;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default AddMember;
