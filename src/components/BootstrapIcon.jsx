import React from 'react';
import Palette from '../styles/Palette.jsx';
import PropTypes from 'prop-types';

export const BootstrapIcon = ({icon, color, fontSize}) =>
    <i style={{
      color: color || Palette.TextPrimary,
      fontSize: fontSize || '1em',
    }}
       className={`bi ${icon}`}/>;

BootstrapIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};