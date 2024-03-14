import { Router } from '@components/index';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="root">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
