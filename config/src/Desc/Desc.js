import React from 'react';
import propTypes from './desc.props';

const Desc = props => {
  const { text, onMouseEnter } = props;
  return (
    <p onMouseEnter={ onMouseEnter }>
      { text }
    </p>
  );
};

Desc.propTypes = propTypes;

export default Desc;
