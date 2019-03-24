import React from 'react';
import { string } from 'prop-types';
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

const Button = (props) => {
  const {
    color, content, icon, size,
  } = props;

  const IconWrap = styled.div`
    font-size: 0.75em;
  `;
  const LabelWrap = styled.div``;
  const ContentWrap = styled.div`
    display: grid;
    grid-gap: ${icon ? '4px' : 0};
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
    } else if (colors && colors[color]) {
      background = colors[color];
    }

    const bgIsLight = hexIsLight(background);
    let textColor = bgIsLight ? '#000' : '#fff';
    if (colors) {
      textColor = bgIsLight ? colors.black : colors.white;
    }

    let padding = '5px';
    if (spacing) {
      padding = `${spacing.md}px ${spacing.lg}px`;
      if (size === 'tiny' || size === 'small') padding = `${spacing.sm}px ${spacing.md}px`;
      if (size === 'large') padding = `${spacing.md}px ${spacing.lg}px`;
      if (size === 'huge') padding = `${spacing.lg}px ${spacing.xl}px`;
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
      border-radius: ${buttons && buttons.corners ? buttons.corners : 0};
      box-shadow: inset 0 1px 0 ${adjustHexLightness(background, 15)};
      color: ${textColor};
      cursor: pointer;
      font-size: ${fontsize};
      font-weight: ${buttons && buttons.fontWeight ? buttons.fontWeight : 'inherit'};
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
    <StyledButton type="button" {...props}>
      <ContentWrap>
        {icon ? <IconWrap>{icon}</IconWrap> : null}
        <LabelWrap>{content}</LabelWrap>
      </ContentWrap>
    </StyledButton>
  );
};
Button.propTypes = {
  color: string,
  content: string,
  icon: string,
  size: string,
};
Button.defaultProps = {
  color: '',
  content: '',
  icon: '',
  size: '',
};

export default Button;
