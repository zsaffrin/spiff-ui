import { arrayOf, node, oneOfType } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div(({ theme }) => {
  const { layout } = theme;

  return `
    padding: ${layout.padding};
    margin: 0 auto;
  `;
});
const InnerContainer = styled.div(({ theme }) => {
  const { layout, space } = theme;

  return `
    padding: ${space.md};
    max-width: ${layout.maxWidth};
  `;
});

const Section = ({ children }) => {
  return (
    <StyledDiv>
      <InnerContainer>
        {children}
      </InnerContainer>
    </StyledDiv>
  );
};
Section.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]),
};
Section.defaultProps = {};

export default Section;
