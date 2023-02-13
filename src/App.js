import './App.css';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
      </div>
    </UserContextProvider>
  );
}

export default App;
