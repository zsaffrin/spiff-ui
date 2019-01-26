import React from 'react';
import { string } from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import spiff from '../../themes/spiff';

const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ButtonListItem = styled.li`
  padding: 2px;
`;

const BasicButton = ({ color, content, size }) => (
  <ThemeProvider theme={spiff}>
    <Button color={color} content={content} size={size} />
  </ThemeProvider>
);
BasicButton.propTypes = {
  color: string,
  content: string,
  size: string,
};
BasicButton.defaultProps = {
  color: '',
  content: '',
  size: '',
};

const listItems = [
  <BasicButton content="default" />,
  <BasicButton content="primary" color="primary" />,
  <BasicButton content="secondary" color="secondary" />,
  <BasicButton content="success" color="success" />,
  <BasicButton content="danger" color="danger" />,
];

const colorListItems = [
  <BasicButton content="#a5cfed" color="#a5cfed" />,
  <BasicButton content="#9966e0" color="#9966e0" />,
  <BasicButton content="#b8a900" color="#b8a900" />,
  <BasicButton content="#bb00cc" color="#bb00cc" />,
  <BasicButton content="#54da48" color="#54da48" />,
];

const sizeListItems = [
  <BasicButton content="Extra Small" size="xs" />,
  <BasicButton content="Small" size="sm" />,
  <BasicButton content="Default" />,
  <BasicButton content="Large" size="lg" />,
  <BasicButton content="Extra Large" size="xl" />,
];

storiesOf('Elements', module).add('Button', () => (
  <>
    <p>Buttons &quot;color&quot; prop will accept any named color in the theme</p>
    <ButtonList>
      {listItems.map(item => (
        <ButtonListItem>{item}</ButtonListItem>
      ))}
    </ButtonList>
    <p>Buttons &quot;color&quot; prop will also accept any hex code</p>
    <ButtonList>
      {colorListItems.map(item => (
        <ButtonListItem>{item}</ButtonListItem>
      ))}
    </ButtonList>
    <p>Buttons &quot;size&quot; prop will accept xs, sm, lg, or xl</p>
    <ButtonList>
      {sizeListItems.map(item => (
        <ButtonListItem>{item}</ButtonListItem>
      ))}
    </ButtonList>
  </>
));
