import { useNavigate, useParams } from 'react-router-dom';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import MemberProfile from '../../components/communities/addMember/MemberProfile';
import { useEffect, useState } from 'react';
import { axiosCurrentMemberList } from '../../apis/Community';
import MemberList from '../../components/communities/addMember/MemberList';

const CurrentMember = (props) => {
  const [currentMember, setCurrentMember] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axiosCurrentMemberList(params).then((res) => {
      console.log(JSON.parse(res.data.data.data));
      setCurrentMember(JSON.parse(res.data.data.data));
    });
  }, [params]);

  return (
    <CurrentMemberWrapper>
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
                {/* <b>현재 멤버</b> */}
              </h2>
            }
          />
        }
      />
      <Main>
        <MemberInfoWrapper>
          <CurrentMemberWrapper>
            <MemberList
              currentMember={currentMember}
              title={'현재 멤버'}
              buttonColor={Palette.TextSecondary}
              buttonText={'삭제'}
              buttonHeight={2}
              action={() => {
                console.log('이거');
              }}
            />
          </CurrentMemberWrapper>
        </MemberInfoWrapper>
      </Main>
    </CurrentMemberWrapper>
  );
};

const CurrentMemberWrapper = styled.div``;

const MemberInfoWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Main = styled.div``;

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
`;

export default CurrentMember;
