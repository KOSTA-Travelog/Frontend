import React, {createContext, useContext} from 'react';
import Palette from '../styles/Palette.jsx';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioContext = createContext({});
export const PostStatusRadioGroup = ({label, children, ...rest}) => {

  return (
      <FieldSet>
        <Legend>{label}</Legend>
        <RadioWrapper>
          <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
        </RadioWrapper>
      </FieldSet>
  );
};

export const PostStatusRadio = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
  display
}) => {
  const group = useContext(RadioContext);
  const isChecked = group.value !== undefined ?
      value === group.value : undefined;
  return (
      <Label checked={isChecked}>
        <input
            type="radio"
            value={value}
            name={name}
            defaultChecked={defaultChecked}
            disabled={disabled || group.disabled}
            checked={isChecked}
            style={{display: display || 'inlineBlock',}}
            onChange={(e) => group.onChange && group.onChange(e.target.value)}
        />
        {children}
      </Label>
  );
};

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Legend = styled.legend`
  display: contents;
`;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${Palette.TextTertiary};
  border-radius: 0.25rem;
`;

const Label = styled.label`
  background-color: ${({checked}) => {
    return checked === true ? Palette.BodyPrimary : 'transparent'
  }};
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.1rem;
`;

PostStatusRadio.propTypes = {
  children: PropTypes.node,
  value:PropTypes.string,
  name:PropTypes.string,
  defaultChecked:PropTypes.bool,
  disabled:PropTypes.bool,
  display: PropTypes.string,
}

PostStatusRadioGroup.propTypes = {
  label:PropTypes.node,
  children:PropTypes.node,
}