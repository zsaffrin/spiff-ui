import { Theme } from './Theme';
import { Header } from './Header';
import { Content } from './Content';

const App = () => {
  return (
    <div>
      <Theme>
        <Header />
        <Content />
      </Theme>
    </div>
  );
};

export default App;
