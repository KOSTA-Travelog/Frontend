import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyleButton = styled.div`
  position: relative;
  height: 2.6rem;
  border: none;
  border-radius: 4px;
  text-align: center;
  background-color: '#5C7CFA';
  color: 'FFFFFF';

  &.delete {
    background-color: '#FC4957';
  }
`;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default function Button(props) {
  return <StyleButton className={props.type}>{props.text}</StyleButton>;
}
