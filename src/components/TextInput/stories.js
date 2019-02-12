import React from 'react';
import { storiesOf } from '@storybook/react';
import Spiff from '../Spiff';
import TextInput from './TextInput';
import notes from './README.md';

const withTheme = storyFn => <Spiff>{storyFn()}</Spiff>;

storiesOf('Input', module)
  .addDecorator(withTheme)
  .add('Text', () => <TextInput value="Texty McTexter" />, {
    notes: { markdown: notes },
  });
