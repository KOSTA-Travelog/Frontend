import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useNavigate, useParams } from 'react-router-dom';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import MemberList from '../../components/communities/addMember/MemberList';
import InputBasic from '../../components/InputBasic';
import {
  axiosAddMember,
  axiosCurrentMemberList,
  axiosSearchNickname,
} from '../../apis/Community';
import MemberProfile from '../../components/communities/addMember/MemberProfile';

const AddMember = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const [currentMember, setCurrentMember] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axiosCurrentMemberList(params).then((res) => {
      setCurrentMember(JSON.parse(res.data.data.data));
    });

    axiosSearchNickname(params).then((res) => {
      setSearchResult(JSON.parse(res.data.data.data));
    });
  }, [params]);

  const searchResultList = searchResult.map((data) => {
    return (
      <MemberProfile
        key={data['userId']}
        profileImage={data['profileImage']}
        nickname={data['nickname']}
        bio={data['bio']}
        buttonColor={Palette.Primary}
        buttonText={'추가'}
        buttonHeight={2}
        action={() => {
          axiosAddMember(params['id'], data['userId']);
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
              navigate(`/community/addMember/21/${e.target.value}`);
            }}
          />
        </SearchInputWrapper>
        <MemberInfoWrapper>
          <SearchResultWrapper>{searchResultList}</SearchResultWrapper>
          <CurrentMemberWrapper>
            <MemberList
              currentMember={currentMember}
              title={'현재 멤버'}
              buttonColor={Palette.TextSecondary}
              buttonText={'삭제'}
              buttonHeight={2}
            />
          </CurrentMemberWrapper>
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
