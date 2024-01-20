import { Button } from '../../../';
import { Section } from '../ui';
import { Theme } from './Theme';

const App = () => {
  return (
    <div>
      <Theme>
        <Section>
          <h1>🚀 Spiff UI</h1>
          <p>A handy little React UI component kit and design systematic</p>
        </Section>
        <Section>
          <Button />
        </Section>
      </Theme>
    </div>
  );
};

export default App;
