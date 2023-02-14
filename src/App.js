import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserContextProvider from './context/UserContext';
import Router from './router/Router';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
