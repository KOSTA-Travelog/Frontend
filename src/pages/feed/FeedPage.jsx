import styled from 'styled-components';
import Palette from '../../styles/Palette.jsx';
import Header, { HeaderTitle } from '../../components/headerComponents/Header.jsx';
import HeaderButton from '../../components/headerComponents/HeaderButton.jsx';
import Footer from '../../components/Footer.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import Feed from '../../components/feedComponents/Feed.jsx';
import { useEffect, useState } from 'react';
import { axiosDeleteFeed, axiosFeed } from '../../apis/Feed.jsx';
import FeedSettingMenu from '../../components/feedComponents/FeedSettingMenu.jsx';
import Modal from '../../components/Modal.jsx';

const FeedPage = () => {
  const [feed, setFeed] = useState([]);
  const [setting, setSetting] = useState(false);
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [postId, setPostId] = useState(0);
  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const params = useParams();

  useEffect(() => {
    axiosFeed(params).then((res) => {
      if (res.data['status'] === 400) {
        alert('잘못된 접근입니다.');
      } else {
        setFeed(JSON.parse(res.data.data.data));
        setNickname(JSON.parse(res.data.data.data)['nickname']);
        setProfileImage(JSON.parse(res.data.data.data)['profileImage']);
        setPostId(JSON.parse(res.data.data.data)['postId']);
      }
    });
  }, [params]);

  const navigate = useNavigate();

  const data = {
    title: feed['postTitle'],
    date: feed['postDate'],
    content: feed['postDescription'],
    openStatus:
        feed['postStatus'] === '1'
            ? 'public'
            : feed['postStatus'] === '2'
                ? 'group'
                : 'private',
  };

  return (
      <>
        <AppStyle>
          <Header
              left={
                <HeaderButton
                    icon={<i className="bi bi-chevron-left"></i>}
                    action={() => navigate(-1)}
                />
              }
              title={
                <HeaderTitle
                    align={'center'}
                    title={
                      <h2>
                        <b>{data['title']}</b>
                      </h2>
                    }
                    action={() => {}}
                />
              }
              right={
                <HeaderButton
                    color={Palette.TextPrimary}
                    icon={<i className="bi bi-three-dots-vertical"></i>}
                    action={() => {
                      setSetting(!setting);
                    }}
                />
              }
          />
          <SettingWrapper>
            {setting && (
                <FeedSettingMenu
                    postId={postId}
                    setModal={setModal}
                    setSetting={setSetting}
                />
            )}
          </SettingWrapper>
          <Content>
            <Section>
              <Feed {...data} />
            </Section>
          </Content>

          {/* Modal */}

          <ModalWrapper>
            {modal && (
                <Modal
                    title={'삭제 확인'}
                    description={'해당 게시물을 삭제하시겠습니까?'}
                    isCheckDelete={true}
                    setSetting={setSetting}
                    deleteAction={() => {
                      axiosDeleteFeed(postId).then(() => {
                        setConfirmModal(true);
                      });
                    }}
                    cancelAction={() => {
                      setModal(false);
                    }}
                    isCloseBtnNeed={false}
                />
            )}
            {confirmModal && (
                <Modal
                    title={'삭제되었습니다.'}
                    isConfirmButton={true}
                    confirmAction={() => {
                      setConfirmModal(false);
                      navigate('/');
                    }}
                />
            )}
          </ModalWrapper>
          <Footer />
        </AppStyle>
      </>
  );
};

const ModalWrapper = styled.div`
  /* width: 5rem; */
`;

const SettingWrapper = styled.div`
  position: absolute;
  z-index: 200;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: -0.8rem;
  margin-left: 1rem;

  @media (min-width: 900px) {
    width: 95%;

    margin-left: 2.5rem;
  }
`;

const AppStyle = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  background-color: ${Palette.BodySecondary};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  min-height: 80vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export default FeedPage;
