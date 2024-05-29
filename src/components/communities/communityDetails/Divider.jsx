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
  /* margin: 0 -1rem; */
  background: ${Palette.Divider};
  height: 1px;
  border: 0;
  width: 90%;
`;

const CountPosts = styled.p`
  color: ${Palette.Divider};
  width: 11%;
  padding-right: 0.2rem;
  text-align: center;

  @media (max-width: 800px) {
    width: 30%;
  }
`;

export default Divider;
