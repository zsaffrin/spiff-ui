import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spiff, Container, Button } from './src';

storiesOf('Top-Level Stories', module)
  .add('No Spiff', () => (
    <div>
      <h1>No Spiff</h1>
      <p>No container is wrapping this text</p>
      <p>
        <Button content="Here is a button" />
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reprehenderit libero
        voluptas harum quis dolor ab blanditiis nostrum tempora animi, fugit commodi fugiat eaque.
        Molestiae totam cum est illum dolor!
      </p>
    </div>
  ))
  .add('No Spiff and Container', () => (
    <div>
      <Container>
        <h1>No Spiff</h1>
        <p>A Container is wrapping this text</p>
        <p>
          <Button content="Here is a button" />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reprehenderit libero
          voluptas harum quis dolor ab blanditiis nostrum tempora animi, fugit commodi fugiat eaque.
          Molestiae totam cum est illum dolor!
        </p>
      </Container>
    </div>
  ))
  .add('With Spiff', () => (
    <Spiff>
      <h1>With Spiff</h1>
      <p>No container is wrapping this text</p>
      <p>
        <Button content="Here is a button" />
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reprehenderit libero
        voluptas harum quis dolor ab blanditiis nostrum tempora animi, fugit commodi fugiat eaque.
        Molestiae totam cum est illum dolor!
      </p>
    </Spiff>
  ))
  .add('With Spiff and Container', () => (
    <Spiff>
      <Container>
        <h1>With Spiff</h1>
        <p>A Container is wrapping this text</p>
        <p>
          <Button content="Here is a button" />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi reprehenderit libero
          voluptas harum quis dolor ab blanditiis nostrum tempora animi, fugit commodi fugiat eaque.
          Molestiae totam cum est illum dolor!
        </p>
      </Container>
    </Spiff>
  ));
