import React from 'react';
import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import { useNavigate } from 'react-router-dom';
import Palette from '../../styles/Palette';
import Footer from '../../components/Footer';
import MemberList from '../../components/communities/addMember/MemberList';
import InputBasic from '../../components/InputBasic';

const AddMember = (props) => {
  const navigate = useNavigate();
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
          <InputBasic text={'사용자 검색'} height={3} searchIcon={true} />
        </SearchInputWrapper>
        <MemberList
          title={'검색 결과'}
          buttonColor={Palette.Primary}
          buttonText={'추가'}
          buttonHeight={2}
        />
        <MemberList
          title={'수락 대기중인 멤버'}
          buttonColor={Palette.TextSecondary}
          buttonText={'취소'}
          buttonHeight={2}
        />
        <MemberList
          title={'현재 멤버'}
          buttonColor={Palette.Error}
          buttonText={'삭제'}
          buttonHeight={2}
        />
      </Main>
      <Footer></Footer>
    </AddMemberWrapper>
  );
};

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
`;

const AddMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  margin: 4rem 0;
  padding: 0 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 52vh;
`;

export default AddMember;
