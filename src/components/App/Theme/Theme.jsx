import { arrayOf, node, oneOfType } from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const space = {
  thin: '2px',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
};

const layout = {
  borderRadius: space.md,
  padding: space.lg,
  maxWidth: '72rem',
};

const color = {
  backgroundShades: ['#1c2541', '#464D64', '#707687', '#9B9EA9', '#C5C7CC'],
};

const app = {
  background: '#2A2939',
  color: '#F9F7F7',
};

const GlobalStyle = createGlobalStyle`
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background: ${app.background};
    color: ${app.color};
    font-size: 14px;
    margin: 0;
  }
  
  p {
    line-height: 1.4;
    margin: 0 0 1em;
    max-width: 48rem;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

const Theme = ({ children }) => {
  const composedTheme = {
    space,
    layout,
    color,
    app,
  };

  return (
    <ThemeProvider theme={composedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
Theme.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};
Theme.defaultProps = {};

export default Theme;
