import styled from 'styled-components';

import { Button } from '../../../../../../';
import { CodeBlock, Section } from '../../../../ui';

const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  align-items: center;
  grid-gap: 0.5rem;
`;

const ButtonDemo = () => {
  return (
    <>
      <Section>
        <p>Default Button</p>
        <Button />
        <CodeBlock content={`<Button />`} />
      </Section>
      <Section>
        <p>Button sizes</p>
        <Row>
          <Button size="xs" />
          <Button size="sm" />
          <Button />
          <Button size="lg" />
          <Button size="xl" />
        </Row>
        <CodeBlock content={`<>
  <Button size="xs" />
  <Button size="sm" />
  <Button />
  <Button size="lg" />
  <Button size="xl" />
</>`} />
      </Section>
    </>
  );
};

export default ButtonDemo;
