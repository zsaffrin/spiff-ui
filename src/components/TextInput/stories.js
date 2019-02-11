import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import TextInput from './TextInput';
import spiff from '../../themes/spiff';
import notes from './README.md';

const activeTheme = spiff;

const withTheme = storyFn => <ThemeProvider theme={activeTheme}>{storyFn()}</ThemeProvider>;

storiesOf('Input', module)
  .addDecorator(withTheme)
  .add('Text', () => <TextInput value="Texty McTexter" />, {
    notes: { markdown: notes },
  });
