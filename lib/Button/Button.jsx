import styled from 'styled-components';

const StyledButton = styled.button(() => {
  return `
    cursor: pointer;
  `;
});

const Button = () => {
  return (
    <StyledButton>
      Button
    </StyledButton>
  );
};

export default Button;
