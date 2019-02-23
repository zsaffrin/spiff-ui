import React from 'react';
import { arrayOf } from 'prop-types';

const ButtonGroup = ({ items }) => {
  const listItems = items.map(i => <li>{i}</li>);

  return <ul>{listItems}</ul>;
};
ButtonGroup.propTypes = {
  items: arrayOf(),
};
ButtonGroup.defaultProps = {
  items: [],
};

export default ButtonGroup;
