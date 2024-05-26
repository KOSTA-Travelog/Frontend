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
import { axiosCommunity } from '../../apis/Community';

const CommunityDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [communityInfo, setCommunityInfo] = useState();

  const countMember = 4;

  const [settingModal, setSettingModal] = useState({
    type: 'manager',
    status: false,
  });

  const settingStatus = settingModal['status'] === true && (
    <SettingModal type={settingModal} />
  );

  useEffect(() => {
    axiosCommunity(params).then((res) => {
      if (JSON.parse(res.data.data.data)['communityStatus'] != 0) {
        setCommunityInfo(JSON.parse(res.data.data.data));
      }
    });
  }, [params, communityInfo]);
  return (
    <CommunityDetailsWrapper>
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
            icon={<i className="bi bi-gear"></i>}
            action={() => {
              setSettingModal((prevState) => ({
                ...prevState,
                status: !prevState.status,
              }));
            }}
          />
        }
        title={
          <HeaderTitle
            align={'center'}
            title={
              <h2 style={{ color: Palette.TextPrimary }}>
                {/* <b>{communityInfo.communityTitle}</b> */}
              </h2>
            }
          />
        }
      />
      <SettingWrapper>{settingStatus}</SettingWrapper>
      <Main>
        <Introduction {...communityInfo} countMember={countMember} />
        <Divider number={2222} />
        <PostImages />
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
