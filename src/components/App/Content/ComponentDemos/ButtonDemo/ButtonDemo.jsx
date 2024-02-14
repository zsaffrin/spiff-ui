import { Button } from '../../../../../../';
import { Section } from '../../../../ui';

const ButtonDemo = () => {
  return (
    <>
      <Section>
        <p>Default Button</p>
        <Button />
      </Section>
      <Section>
        <p>Button sizes</p>
        <Button size="xs" />
        <Button size="sm" />
        <Button />
        <Button size="lg" />
        <Button size="xl" />
      </Section>
    </>
  );
};

export default ButtonDemo;
