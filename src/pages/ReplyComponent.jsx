import MiniProfile from '../components/MiniProfile.jsx';
import styled from 'styled-components';
import Palette from '../styles/Palette.jsx';
import PropTypes from 'prop-types';

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  background-color: ${Palette.BodyPrimary};
  border-radius: 0.5rem;
  box-shadow: ${Palette.ShadowBody} ;
`;

const ReplyBody = styled.div`
  padding: 0.5rem;
`

const ReplyComponent = (props) => {
  return (
      <ReplyWrapper>
        <MiniProfile
            {...props}
        />
        <ReplyBody>
          들러볼게요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요요
        </ReplyBody>
      </ReplyWrapper>
  );
};

ReplyComponent.propTypes = {
  image: PropTypes.string,
  primary: PropTypes.string,
  secondary: PropTypes.string
};
export default ReplyComponent;
