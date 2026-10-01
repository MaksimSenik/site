
import { Routes, Link, Route } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Baristas from './pages/Baristas';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to = "/About">О нас</Link><br/>
          <Link to = "/Contacts">Где нас найти</Link><br/>
          <Link to = "/Baristas">Наша Команда</Link>

        </nav>
        <Routes>
          <Route path = "/About" element={<About></About>}></Route>
          <Route path = "/Contacts" element={<Contacts></Contacts>}></Route>
          <Route path = "/Baristas" element={<Baristas></Baristas>}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
