import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../../styles/Palette';
import ModalCustomMenu from '../ModalCustomMenu';
import { useNavigate } from 'react-router-dom';

const SettingModal = (props) => {
  const navigate = useNavigate();

  const ManagerSettingItems = [
    {
      icon: <i className="bi bi-person-plus"></i>,
      text: '멤버 초대',
      action: () => {
        navigate(`/community/addMember/${props.params['id']}`);
      },
    },
    {
      icon: <i className="bi bi-people"></i>,
      text: '커뮤니티 관리',
      action: () => {},
    },
  ];

  const MemberSettingItems = [
    {
      icon: <i className="bi bi-person-plus"></i>,
      text: '멤버 초대',
      action: () => {},
    },
    {
      icon: <i className="bi bi-arrow-bar-right"></i>,
      text: '커뮤니티 탈퇴',
      action: () => {},
    },
  ];

  const ManagerModal = ManagerSettingItems.map((item, index) => {
    return <ModalCustomMenu {...item} key={index} />;
  });

  const MemberModal = MemberSettingItems.map((item, index) => {
    return <ModalCustomMenu {...item} key={index} />;
  });

  return (
    <SettingModalWrapper>
      {props.type['type'] === 'manager' ? ManagerModal : MemberModal}
    </SettingModalWrapper>
  );
};

SettingModal.prototype = {
  // icon: PropTypes.node,
  // text: PropTypes.string,
  type: PropTypes.object,
  params: PropTypes.object,
};

const IconWrapper = styled.div`
  color: ${Palette.TextSecondary};
  font-size: 1.3rem;
`;

const SettingModalWrapper = styled.div`
  width: 9.2rem;
  min-height: 4.2rem;
  border-radius: 5px;
  border: 1px solid ${Palette.ModalBorder};
  background-color: ${Palette.BodyPrimary};
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.3rem;
`;

const Btn = styled.button`
  color: ${Palette.TextSecondary};
  width: 5.7rem;
  text-align: left;
  padding-left: 0.8rem;
`;

export default SettingModal;
