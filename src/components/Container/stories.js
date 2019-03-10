import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import Spiff from '../Spiff';
import Container from './Container';
import notes from './README.md';

const withTheme = storyFn => <Spiff>{storyFn()}</Spiff>;

storiesOf('Container', module)
  .addDecorator(withNotes)
  .addDecorator(withTheme)
  .add(
    'Basic',
    () => (
      <Container>
        <h2>Contained</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus molestiae quam at
          temporibus tenetur veritatis? Quis, voluptas assumenda ipsam, harum, ab dolor modi
          nesciunt vitae quasi qui quod neque veritatis!
        </p>
        <p>
          Aspernatur, neque ipsum! Et, ea maiores. Delectus, assumenda sunt odit laboriosam sit
          nesciunt, enim a eveniet voluptatem accusantium consequatur nemo quos illum nisi rerum
          magnam? Voluptatum eius perspiciatis natus deserunt.
        </p>
        <p>
          Aspernatur dignissimos molestiae, ad doloribus alias sed fugit quasi veritatis cupiditate
          assumenda nulla architecto repellendus eos et id adipisci ex! Accusamus, debitis nihil hic
          repudiandae quidem cumque sint dolores alias?
        </p>
        <p>
          Ipsum quae sint assumenda deserunt similique cum delectus voluptas eius unde itaque
          tempora aperiam, provident iste! Fuga nisi quia atque consequatur excepturi aliquam non
          alias sapiente laboriosam, laborum modi reprehenderit.
        </p>
      </Container>
    ),
    {
      notes: { markdown: notes },
    },
  );
