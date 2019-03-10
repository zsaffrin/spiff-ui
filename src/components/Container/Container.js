import React from 'react';
import {
  oneOfType, arrayOf, node, string,
} from 'prop-types';
import styled from 'styled-components';

const Container = ({ children, width }) => {
  const Wrapper = styled.div(({ theme }) => {
    const { containerWidth } = theme;

    return `
      margin-left: auto;
      margin-right: auto;
      max-width: ${width || containerWidth};
    `;
  });

  return <Wrapper>{children}</Wrapper>;
};
Container.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  width: string,
};
Container.defaultProps = {
  children: [],
  width: '',
};

export default Container;
