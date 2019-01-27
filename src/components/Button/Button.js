import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import {
  adjustHexLightness, hexIsLight, hexToRgb, isHex,
} from '../../utils';

const determineTextShadow = (color) => {
  if (hexIsLight(color)) {
    const rgb = hexToRgb(adjustHexLightness(color, 70));
    return `0 1px 0 rgba(${rgb.join(', ')}, 0.25)`;
  }

  const rgb = hexToRgb(adjustHexLightness(color, -70));
  return `0 -1px 0 rgba(${rgb.join(', ')}, 0.5)`;
};

const Button = ({
  click, color, content, icon, size,
}) => {
  const IconWrap = styled.div``;
  const LabelWrap = styled.div``;
  const ContentWrap = styled.div`
    display: grid;
    grid-gap: 4px;
    grid-template-columns: auto 1fr;
    align-items: center;
  `;

  const StyledButton = styled.button(({ theme }) => {
    const {
      baseFontSize, buttons, colors, spacing,
    } = theme;

    let background = '#ccc';
    if (isHex(color)) {
      background = color;
    } else if (colors[color]) background = colors[color];

    const textColor = hexIsLight(background) ? colors.black || '#000' : colors.white || '#fff';

    let padding = '5px';
    if (spacing) {
      padding = `${spacing.md} ${spacing.lg}`;
      if (size === 'tiny' || size === 'small') {
        padding = `${spacing.sm} ${spacing.md}`;
      }
      if (size === 'large') padding = `${spacing.md} ${spacing.lg}`;
      if (size === 'huge') padding = `${spacing.lg} ${spacing.xl}`;
    }

    let fontsize = `${baseFontSize}px` || '16px';
    if (size && baseFontSize) {
      if (size === 'tiny') fontsize = `${baseFontSize * 0.7}px`;
      if (size === 'small') fontsize = `${baseFontSize * 0.9}px`;
      if (size === 'large') fontsize = `${baseFontSize * 1.5}px`;
      if (size === 'huge') fontsize = `${baseFontSize * 2}px`;
    }

    return `
      appearance: none;
      background: ${background};
      border: 1px solid ${adjustHexLightness(background, -15)};
      border-radius: ${buttons.corners || 0};
      box-shadow: inset 0 1px 0 ${adjustHexLightness(background, 15)};
      color: ${textColor};
      cursor: pointer;
      font-size: ${fontsize};
      font-weight: ${buttons.fontWeight || 'inherit'};
      padding: ${padding};
      text-shadow: ${determineTextShadow(background)};
      &:hover {
        background: ${adjustHexLightness(background, 20)}
      }
      &:focus {
        background: ${adjustHexLightness(background, 15)};
        outline: none;
      }
      &:active {
        background: ${adjustHexLightness(background, 40)};
        box-shadow: none;
        color: ${background};
        outline: none;
        text-shadow: none;
      }
    `;
  });

  return (
    <StyledButton type="button" onClick={click}>
      <ContentWrap>
        {icon ? <IconWrap>{icon}</IconWrap> : ''}
        <LabelWrap>{content}</LabelWrap>
      </ContentWrap>
    </StyledButton>
  );
};
Button.propTypes = {
  click: func,
  color: string,
  content: string,
  icon: string,
  size: string,
};
Button.defaultProps = {
  click: () => {},
  color: '',
  content: '',
  icon: '',
  size: '',
};

export default Button;
