import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>🚀 Spiff UI</h1>
      <p>A handy little React UI component kit and design system</p>
    </StyledHeader>
  );
};

export default Header;
