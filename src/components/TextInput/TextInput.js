import React from 'react';
import styled from 'styled-components';

const TextInput = (props) => {
  const StyledInput = styled.input(({ theme }) => {
    const { baseFontSize, colors, spacing } = theme;

    return `
      background: ${colors.white || '#fff'};
      border: 1px solid ${colors.grays[2] || '#666'}
      border-radius: ${spacing.sm || 0}px;
      font-size: ${baseFontSize}px;
      padding: ${spacing.md}px;
    `;
  });

  return <StyledInput {...props} />;
};

export default TextInput;
