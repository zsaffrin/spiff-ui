import { string } from 'prop-types';
import styled from 'styled-components';
import { useConfig } from '../../hooks';

const StyledButton = styled.button(({
  $config,
  size,
}) => {
  let fontSize = '0.79rem';
  let padding = '0.5em 1em';
  if (size === 'xs') {
    fontSize = '0.68rem';
    padding = '0 0.25em';
  }
  if (size === 'sm') {
    fontSize = '0.71rem';
    padding = '0.25em 0.5em';
  }
  if (size === 'lg') {
    fontSize = '0.86rem';
    padding = '0.75em 1.25em';
  }
  if (size === 'xl') {
    fontSize = '0.9rem';
    padding = '1em 1.5em';
  }

  return `
    appearance: none;
    border-radius: ${$config.buttonBorderRadius};
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-size: ${fontSize};
    font-weight: bold;
    padding: ${padding};
  `;
});

const Button = (props) => {
  const config = useConfig();

  return (
    <StyledButton
      $config={config}
      {...props}
    >
      Button
    </StyledButton>
  );
};
Button.propTypes = {
  size: string,
};
Button.defaultProps = {};

export default Button;
