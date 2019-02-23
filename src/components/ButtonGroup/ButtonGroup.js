import React from 'react';
import { arrayOf, node } from 'prop-types';
import styled from 'styled-components';

const ButtonGroup = ({ items }) => {
  const StyledGroup = styled.ul`
    list-style: none;
  `;

  const StyledItem = styled.li`
    display: inline-block;

    & > button {
      border-radius: 0 !important;
    }

    &:first-child > button {
      border-radius: 8px 0 0 8px !important;
    }
    &:last-child > button {
      border-radius: 0 8px 8px 0 !important;
    }
  `;

  const listItems = items.map(i => <StyledItem>{i}</StyledItem>);

  return <StyledGroup>{listItems}</StyledGroup>;
};
ButtonGroup.propTypes = {
  items: arrayOf(node),
};
ButtonGroup.defaultProps = {
  items: [],
};

export default ButtonGroup;
