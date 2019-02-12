import React from 'react';
import { storiesOf } from '@storybook/react';
import Spiff from './Spiff';
import notes from './README.md';

storiesOf('Spiff', module).add(
  'Container',
  () => (
    <Spiff>
      <h1>Spiff (Container component)</h1>
      <p>Spiff components go inside here to gain magic theme powers</p>
    </Spiff>
  ),
  {
    notes: { markdown: notes },
  },
);
