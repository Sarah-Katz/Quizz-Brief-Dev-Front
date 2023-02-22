import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserContextProvider from './context/UserContext';
import Router from './router/Router';

function App() {
  const screenWidth = window.innerWidth;
console.log(`Screen width is ${screenWidth}px`);
let myImg = '/img/background/stars.jpg';
  if (screenWidth > 784){
    myImg = '/img/background/starsDesktop.jpg';
  };
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
        <img className="fondEcran" src={myImg} alt="Fond D'ecran etoilés" />
          <Router />
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
