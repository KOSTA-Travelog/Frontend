import React from 'react';
import styled from 'styled-components';
import Palette from '../../styles/Palette';
import ModalCustomMenu from '../ModalCustomMenu';
import { useNavigate } from 'react-router-dom';
import { axiosDeleteFeed } from '../../apis/Feed';
import { PropTypes } from 'prop-types';

const FeedSettingMenu = (props) => {
  const navigate = useNavigate();

  const settingItems = [
    {
      icon: <i className="bi bi-journal-plus"></i>,
      text: '커뮤니티 등록',
      action: () => {
        // navigate(`/feed/${}`);
      },
    },

    {
      icon: <i className="bi bi-pencil"></i>,
      text: '수정',
      action: () => {},
    },
    {
      icon: <i className="bi bi-trash"></i>,
      text: '삭제',
      action: () => {
        props.setModal(true);
        props.setSetting(false);
      },
    },
  ];

  const btn = settingItems.map((item, index) => {
    return <ModalCustomMenu {...item} key={index} />;
  });

  return <Wrapper>{btn}</Wrapper>;
};

FeedSettingMenu.propTypes = {
  postId: PropTypes.number,
  setModal: PropTypes.func.isRequired,
  setSetting: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  width: 9rem;
  height: 7rem;

  border-radius: 5px;
  border: 1px solid ${Palette.ModalBorder};
  background-color: ${Palette.BodyPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0.8rem;
`;

export default FeedSettingMenu;
