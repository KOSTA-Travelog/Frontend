import styled from 'styled-components';
import Palette from '../../styles/Palette';
import ModalCustomMenu from '../ModalCustomMenu';

const settingItems = [
  {
    icon: <i className="bbi bi-person-check"></i>,
    text: '내 정보 관리',
    action: () => {},
  },
  {
    icon: <i className="bi bi-people"></i>,
    text: '커뮤니티 관리',
    action: () => {},
  },
  {
    icon: <i className="bi bi-person-plus"></i>,
    text: '팔로우 관리',
    action: () => {},
  },
  {
    icon: <i className="bi bi-box-arrow-right"></i>,
    text: '로그아웃',
    action: () => {},
  },
];

const btn = settingItems.map((item, index) => {
  return (
    <>
      <ModalCustomMenu {...item} key={index} />
    </>
  );
});

const MyPageSetting = (props) => {
  return <Wrapper>{btn}</Wrapper>;
};

const Wrapper = styled.div`
  width: 9rem;

  border-radius: 5px;
  border: 1px solid ${Palette.ModalBorder};
  background-color: ${Palette.BodyPrimary};
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export default MyPageSetting;
