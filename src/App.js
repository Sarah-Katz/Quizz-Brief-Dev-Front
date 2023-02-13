import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <NavMenu />
      </div>
    </UserContextProvider>
  );
}

export default App;
