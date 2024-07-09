import { useNavigate, useParams } from 'react-router-dom';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Palette from '../../styles/Palette';
import styled from 'styled-components';
import InputBasic from '../../components/InputBasic';
import MemberProfile from '../../components/communities/addMember/MemberProfile';
import { useEffect, useState } from 'react';
import {
  axiosCheckCreatorNickname,
  axiosCurrentMemberList,
} from '../../apis/Community';
import MemberList from '../../components/communities/addMember/MemberList';

const CurrentMember = (props) => {
  const [currentMember, setCurrentMember] = useState([]);
  const [creator, setCreator] = useState('');
  const navigate = useNavigate();
  const queryString = new URLSearchParams(location.search);

  useEffect(() => {
    axiosCurrentMemberList(queryString.get('id')).then((res) => {
      setCurrentMember(JSON.parse(res.data.data.data));
    });

    axiosCheckCreatorNickname(queryString.get('id')).then((res) => {
      setCreator(res.data.data.data);
    });
  }, []);

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
                <b>현재 멤버</b>
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
              buttonColor={Palette.Primary}
              buttonText={'삭제'}
              buttonHeight={2}
              action={() => {
                console.log('이거');
              }}
              creator={creator}
            />
          </CurrentMemberWrapper>
        </MemberInfoWrapper>
      </Main>
    </CurrentMemberWrapper>
  );
};

const CurrentMemberWrapper = styled.div`
  padding: 2rem 1rem;
`;

const MemberInfoWrapper = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div``;

const SearchInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -0.5rem;
`;

export default CurrentMember;
