import styled from 'styled-components';
import Palette from '../../styles/Palette';
import { PropTypes } from 'prop-types';

const ProfileStatusItem = (props) => {
  return (
    <InfoWrapper>
      <ItemWrapper>
        <Item>{props.item}</Item>
        <Count>{props.count}</Count>
      </ItemWrapper>
      {props.separate && <DividerVertical></DividerVertical>}
    </InfoWrapper>
  );
};

ProfileStatusItem.prototype = {
  item: PropTypes.string,
  count: PropTypes.number,
  separate: PropTypes.bool,
};

const ProfileStatus = (props) => {
  const profileStatus = [
    { item: '게시글 수', count: 50, separate: true },
    { item: '팔로우', count: 50, separate: true },
    { item: '팔로워', count: 200, separate: false },
  ];

  const profileInfo = profileStatus.map((item, index) => {
    return <ProfileStatusItem {...item} key={index} />;
  });

  return <ProfileStatusWrapper>{profileInfo}</ProfileStatusWrapper>;
};

const ProfileStatusWrapper = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 7rem;
  height: 4.5vh;
  justify-content: space-between;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.p``;

const Count = styled.p``;

const DividerVertical = styled.div`
  border-left: thin solid ${Palette.Divider};
`;

export { ProfileStatus, ProfileStatusItem };
