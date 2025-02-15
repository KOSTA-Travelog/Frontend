import styled from 'styled-components';
import InputBasic from './InputBasic';
import { PropTypes } from 'prop-types';
import TextArea from './TextArea';

const LabeledInput = (props) => {
  return (
    <Wrapper>
      <Item>{props.item}</Item>
      {props.inputStyle === 'input' && (
        <InputBasic
          text={props.text}
          height={props.height}
          editInput={props.editInput}
          onChange={props.onChange}
          value={props.value}
          inputStyle={props.inputStyle}
          type={props.type}
        />
      )}
      {props.inputStyle === 'textArea' && (
        <TextArea
          text={props.text}
          height={props.height}
          editInput={props.editInput}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </Wrapper>
  );
};

LabeledInput.propTypes = {
  item: PropTypes.string,
  text: PropTypes.string,
  height: PropTypes.number,
  editInput: PropTypes.bool,
  inputStyle: PropTypes.oneOf(['input', 'textArea']),
  onChange: PropTypes.func,
  value: PropTypes.any,
  type: PropTypes.string,
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
  font-size: 16px;
`;

export default LabeledInput;
