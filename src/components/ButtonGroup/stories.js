import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import Spiff from '../Spiff';
import Button from '../Button';
import ButtonGroup from './ButtonGroup';
import notes from './README.md';

const withTheme = storyFn => <Spiff>{storyFn()}</Spiff>;

const items = [
  <Button content="Button 1" />,
  <Button content="Button 2" />,
  <Button content="Button 3" />,
];

storiesOf('ButtonGroup', module)
  .addDecorator(withNotes)
  .addDecorator(withTheme)
  .add('Basic', () => <ButtonGroup items={items} />, {
    notes: { markdown: notes },
  });
