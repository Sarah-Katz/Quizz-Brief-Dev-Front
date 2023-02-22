import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserContextProvider from './context/UserContext';
import Router from './router/Router';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
        <img className="fondEcran" src="/img/background/stars.jpg" alt="Fond D'ecran etoilés" />
          <Router />
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
