import PropTypes from 'prop-types';
import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.5em;
  padding:0.5rem;
`;

const Image = styled.img`
  width: auto;
  height: 2.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
`;

const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3em;
  font-size: 0.8em;
  color: ${Palette.TextTertiary}
`;

const PrimaryText = styled.p`
  font-size: 1.6em;
  color: ${Palette.TextPrimary};
`;

const MiniProfile = (props) => {
  return (
      <ProfileWrapper>
        <Image src={props.image} alt=""/>
        <ProfileTextWrapper onClick={props.onClick}>
          <PrimaryText>{props.primary}</PrimaryText>
          <p>
            {props.secondary}
          </p>
        </ProfileTextWrapper>
        {props.menu ? <div>{props.menu}</div> : null}
      </ProfileWrapper>
  );
};

MiniProfile.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.node,
  secondary: PropTypes.node,
  menu: PropTypes.node,
};

export default MiniProfile;