import React from 'react';
import {
  arrayOf, node, oneOfType, shape,
} from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import spiff from '../../themes/spiff';

const Spiff = ({ children, theme }) => {
  const { bodyFontFamily } = theme;

  const SpiffStyle = styled.div`
    font-family: ${bodyFontFamily || 'sans-serif'};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `;

  return (
    <ThemeProvider theme={theme}>
      <SpiffStyle>{children}</SpiffStyle>
    </ThemeProvider>
  );
};
Spiff.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  theme: shape({}),
};
Spiff.defaultProps = {
  theme: spiff,
};

export default Spiff;
