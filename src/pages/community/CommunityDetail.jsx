import styled from 'styled-components';
import Header, { HeaderTitle } from '../../components/headerComponents/Header';
import Palette from '../../styles/Palette';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderButton from '../../components/headerComponents/HeaderButton';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import SettingModal from '../../components/communities/SettingModal';
import Introduction from '../../components/communities/communityDetails/Introduction';
import PostImages from '../../components/communities/communityDetails/PostImages';
import Divider from '../../components/communities/communityDetails/Divider';
import { axiosCommunity, axiosCommunityPostList } from '../../apis/Community';
// /:id/:userId
const CommunityDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [communityInfo, setCommunityInfo] = useState();
  const [postList, setPostList] = useState([]);
  const [title, setTitle] = useState('');
  const [countCommunity, setCountCommunity] = useState(0);
  const queryString = new URLSearchParams(location.search);

  const [settingModal, setSettingModal] = useState({
    type: 'manager',
    status: false,
  });

  const settingStatus = settingModal['status'] === true && (
    <SettingModal type={settingModal} params={params} />
  );

  useEffect(() => {
    axiosCommunity(queryString.get('id')).then((res) => {
      setCommunityInfo(JSON.parse(res.data.data.data));
      setTitle(JSON.parse(res.data.data.data)['communityTitle']);
    });

    axiosCommunityPostList(
      queryString.get('id'),
      queryString.get('userId')
    ).then((res) => {
      setPostList(JSON.parse(res.data.data.data), queryString.get('id'));
    });
    sessionStorage.setItem('communityId', queryString.get('id'));
  }, [queryString]);

  useEffect(() => {
    setCountCommunity(postList.length);
  }, [postList]);

  return (
    <CommunityDetailsWrapper>
      <Header
        left={
          <HeaderButton
            color={Palette.TextPrimary}
            icon={<i className="bi bi-chevron-left"></i>}
            action={() => navigate('/community')}
          />
        }
        right={
          <HeaderButton
            icon={<i className="bi bi-gear"></i>}
            action={() => {
              // setSettingModal((prevState) => ({
              //   ...prevState,
              //   status: !prevState.status,
              // }));
              sessionStorage.setItem(
                'communityId',
                `${communityInfo['communityId']}`
              );
              navigate(
                `/community/addMember?id=${communityInfo['communityId']}`
              );
            }}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                <b>{title}</b>
              </h2>
            }
          />
        }
      />
      {/* <SettingWrapper>{settingStatus}</SettingWrapper> */}

      <Main>
        <Introduction
          {...communityInfo}
          action={() => {
            navigate(`/community/currentMember?id=${queryString.get('id')}`);
          }}
        />
        <Divider number={countCommunity} />
        <PostImages postList={postList} />
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
