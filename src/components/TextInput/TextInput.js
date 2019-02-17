import React from 'react';
import styled from 'styled-components';

const TextInput = (props) => {
  const StyledInput = styled.input(({ theme }) => {
    const { baseFontSize, inputs, spacing } = theme;

    return `
      background: ${inputs.background || '#fff'};
      border: ${inputs.border || '1px solid #666'}
      border-radius: ${inputs.borderRadius || 0};
      font-size: ${baseFontSize}px;
      padding: ${spacing.md}px;
    `;
  });

  return <StyledInput {...props} />;
};

export default TextInput;
