import styled from 'styled-components';
import { useConfig } from '../../hooks';

const StyledButton = styled.button(({ $config }) => {
  return `
    appearance: none;
    border-radius: ${$config.buttonBorderRadius};
    border-style: ${$config.buttonBorderStyle};
    border-width: ${$config.buttonBorderWidth};
    cursor: pointer;
    font-weight: bold;
    padding: ${$config.buttonPadding};
  `;
});

const Button = () => {
  const config = useConfig();

  return (
    <StyledButton $config={config}>
      Button
    </StyledButton>
  );
};

export default Button;
