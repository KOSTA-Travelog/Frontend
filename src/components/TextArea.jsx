import styled from 'styled-components';
import Palette from '../styles/Palette';
import { PropTypes } from 'prop-types';

const TextArea = (props) => {
  return (
    <Text
      placeholder={props.text}
      style={{ height: `${props.height}rem` }}
      className={
        (props.searchIcon ? 'search ' : '') +
        (props.editInput ? 'editInput' : '')
      }
    ></Text>
  );
};

TextArea.prototype = {
  text: PropTypes.string,
  height: PropTypes.number,
  editInput: PropTypes.bool,
};

const Text = styled.textarea`
  width: 100%;
  height: 6.5rem;

  background: ${Palette.BodyPrimary};
  border: 1px solid ${Palette.InputBorder};
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  padding-left: 1rem;
  padding-top: 1rem;

  &::placeholder {
    color: ${Palette.InputBorder};
  }

  &.search {
    &::placeholder {
      padding-left: 1.2rem;
    }
  }
  &.editInput {
    &::placeholder {
      color: ${Palette.TextPrimary};
    }
  }
`;

export default TextArea;
