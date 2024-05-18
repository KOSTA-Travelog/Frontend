import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Palette from '../../../styles/Palette';

const Divider = (props) => {
  return (
    <Line>
      <Hr />
      <CountPosts>게시글 {props.number}건</CountPosts>
    </Line>
  );
};

Divider.prototype = {
  number: PropTypes.number,
};

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 1rem;
`;
const Hr = styled.hr`
  margin: 0 -1rem;
  background: ${Palette.Divider};
  height: 1px;
  border: 0;
  width: 100%;
`;

const CountPosts = styled.p`
  color: ${Palette.Divider};
  min-width: 25%;
  padding-right: 0.2rem;
`;

export default Divider;
