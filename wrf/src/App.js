import { Routes, Link, Route } from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Baristas from './pages/Baristas';
import Price from './pages/Price';
import ValorantCafeCards from './pages/ValorantCafeCards';
import './App.css'; 

function App() {
  return (
    <div className="App">
      {/* Шапка с горизонтальной навигацией */}
      <nav className="val-navbar">
        <div className="val-nav-container">
          {/* Клик по логотипу теперь всегда возвращает к карточкам */}
          <Link to="/" className="val-nav-logo">
            VAL//CAFE
          </Link>
          
          <div className="val-nav-links-group">
            <Link to="/About" className="val-nav-link">О нас</Link>
            <Link to="/Contacts" className="val-nav-link">Где нас найти</Link>
            <Link to="/Baristas" className="val-nav-link">Наша Команда</Link>
            <Link to="/Price" className="val-nav-link">ПрайсЛист</Link>
          </div>
        </div>
      </nav>

      {/* Основной контент страниц */}
      <main className="val-main-content">
        <Routes>
          {/* Карточки теперь рендерятся сразу при открытии сайта (по пути "/") */}
          <Route path="/" element={<ValorantCafeCards />} />
          
          {/* Остальные страницы открываются по своим ссылкам */}
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Baristas" element={<Baristas />} />
          <Route path="/Price" element={<Price />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
