import './App.css';
import Categories from './pages/Categories/Categories';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/categorie' element={<Categories />} />
    </Routes>
     
    </div>
    </Router>
  );
}

export default App;
