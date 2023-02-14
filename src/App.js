import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Categories from './pages/Categories/Categories';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
