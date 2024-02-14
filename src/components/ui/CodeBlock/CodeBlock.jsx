import { string } from 'prop-types';
import styled from 'styled-components';

const StyledPre = styled.pre`
  background: #1f1f1f;
  border: 1px solid #3f3f3f;
  color: #bcbcbc;
  padding: 0.5rem 1rem;
`;

const CodeBlock = ({ content }) => {
  return (
    <StyledPre>{content}</StyledPre>
  );
};
CodeBlock.propTypes = {
  content: string,
};
CodeBlock.defaultProps = {};

export default CodeBlock;
