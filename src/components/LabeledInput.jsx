import styled from 'styled-components';
import InputBasic from './InputBasic';
import { PropTypes } from 'prop-types';
import TextArea from './TextArea';

const LabeledInput = (props) => {
  return (
    <Wrapper>
      <Item>{props.item}</Item>
      {props.type === 'input' && (
        <InputBasic
          text={props.text}
          height={props.height}
          editInput={props.editInput}
        />
      )}
      {props.type === 'textArea' && (
        <TextArea
          text={props.text}
          height={props.height}
          editInput={props.editInput}
        />
      )}
    </Wrapper>
  );
};

LabeledInput.prototype = {
  item: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.number,
  editInput: PropTypes.bool,
  type: PropTypes.oneOf(['input', 'textArea']),
};

const Wrapper = styled.div`
  padding-top: 1rem;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
`;

const Item = styled.span`
  height: 1rem;
`;

export default LabeledInput;
