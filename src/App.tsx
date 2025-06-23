import ProviderContainer from './ProviderContainer';
import Routes from './Routes';
import './styles/App/index.scss';
const App = () => {
  return (
    <ProviderContainer>
      <Routes />
    </ProviderContainer>
  );
};

export default App;
