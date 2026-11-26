import React, { useState } from 'react';
import './Contacts.css';

const locations = [
  {
    id: 'SECTOR 01 // ALPHA',
    codename: 'ЦЕНТРАЛЬНЫЙ ШТАБ (SPLIT)',
    address: 'ул. Большая Садовая, 48 // Вход со стороны сквера',
    coords: '47.222078, 39.720358',
    hours: '08:00 — 23:00 (Ежедневно)',
    landmarks: [
      'Метро / Остановка: 3 минуты пешком от главного проспекта',
      'Ориентир: Матовая чёрная вывеска с красным индикатором у арки',
      'Парковка: Городская зона вдоль бульвара (бесплатно после 20:00)'
    ],
    features: ['32 посадочных места', 'Брю-бар V60', 'Турнирный экран'],
    status: 'ONLINE // ОТКРЫТО СЕЙЧАС'
  },
  {
    id: 'SECTOR 02 // BRAVO',
    codename: 'ТЕХНО-ХАБ (ASCENT)',
    address: 'пр. Ворошиловский, 82 // БЦ «Кингдом», 1 этаж',
    coords: '47.231412, 39.712890',
    hours: '07:30 — 22:00 (Пн–Вс)',
    landmarks: [
      'Вход: Через центральный атриум, налево от ресепшена',
      'Ориентир: Неоновая полоса #FF4655 вдоль панорамного окна',
      'Формат: Быстрая выдача навынос + тихая зона для работы'
    ],
    features: ['Экспресс-стойка', 'Розетки у каждого стола', 'Гигабитный Wi-Fi'],
    status: 'ONLINE // ОТКРЫТО СЕЙЧАС'
  }
];

export default function LocationsPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = locations[selectedIdx];

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(current.coords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="val-loc-page">
      <div className="val-grid-overlay" />

      <div className="val-container">
        {/* HERO БЛОК */}
        <header className="val-loc-hero">
          <div className="val-tag">
            <span className="val-dot" /> DEPLOYMENT ZONES // VAL//CAFE
          </div>
          <h1 className="val-title">
            ТОЧКИ ВЫСАДКИ <span className="val-accent">ПРОТОКОЛА</span>
          </h1>
          <p className="val-lead">
            Выберите ближайший сектор <strong>val//cafe</strong>, чтобы пополнить запас кофеина 
            перед важным раундом или перевести дух в безопасной зоне.
          </p>
        </header>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ЛОКАЦИЙ (КАК ВЫБОР КАРТЫ В МАТЧЕ) */}
        <div className="val-map-selector">
          {locations.map((loc, index) => (
            <button
              key={loc.id}
              className={`val-map-btn ${selectedIdx === index ? 'active' : ''}`}
              onClick={() => setSelectedIdx(index)}
            >
              <span className="val-map-sector">{loc.id}</span>
              <span className="val-map-name">{loc.codename}</span>
            </button>
          ))}
        </div>

        {/* ОСНОВНОЙ ТЕРМИНАЛ С ИНФОРМАЦИЕЙ И РАДАРОМ */}
        <section className="val-terminal-grid">
          {/* Левая колонка: Досье адреса */}
          <div className="val-intel-card">
            <div className="val-status-bar">
              <span className="val-status-pulse" />
              <span>{current.status}</span>
            </div>

            <h2>{current.codename}</h2>
            <p className="val-address-main">{current.address}</p>

            {/* Блок GPS с кнопкой копирования */}
            <div className="val-coords-box">
              <div>
                <span className="val-mini-label">GPS КООРДИНАТЫ</span>
                <div className="val-coords-value">{current.coords}</div>
              </div>
              <button className="val-copy-btn" onClick={handleCopyCoords}>
                {copied ? 'СКОПИРОВАНО ✓' : 'КОПИРОВАТЬ GPS'}
              </button>
            </div>

            <div className="val-info-row">
              <span className="val-mini-label">ВРЕМЯ РАБОТЫ БАЗЫ</span>
              <div className="val-info-text">{current.hours}</div>
            </div>

            <div className="val-info-row">
              <span className="val-mini-label">МАРШРУТ И ОРИЕНТИРЫ</span>
              <ul className="val-landmarks-list">
                {current.landmarks.map((item, i) => (
                  <li key={i}>
                    <span className="val-accent">//</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="val-features-tags">
              {current.features.map((feat, i) => (
                <span key={i} className="val-spec-tag">{feat}</span>
              ))}
            </div>
          </div>

          {/* Правая колонка: Стилизованный тактический радар / карта */}
          <div className="val-radar-box">
            <div className="val-radar-header">
              <span>TACTICAL RADAR // LIVE FEED</span>
              <span className="val-accent">SCALE 1:2500</span>
            </div>

            <div className="val-radar-screen">
              {/* Сетка и круги радара */}
              <div className="val-radar-circle c1" />
              <div className="val-radar-circle c2" />
              <div className="val-radar-crosshair-x" />
              <div className="val-radar-crosshair-y" />

              {/* Метка точки высадки */}
              <div className="val-pin-wrapper">
                <div className="val-pin-ping" />
                <div className="val-pin-core" />
                <div className="val-pin-label">
                  <span>VAL//CAFE</span>
                  <small>{current.id.split('//')}</small>
                </div>
              </div>

              {/* Декоративные подписи секторов на карте */}
              <span className="val-map-label top-left">N // 47.22°</span>
              <span className="val-map-label bottom-right">SAFE ZONE // NO SPIKE</span>
            </div>

            <div className="val-radar-footer">
              <a
                href={`https://yandex.ru{encodeURIComponent(current.coords)}`}
                target="_blank"
                rel="noreferrer"
                className="val-btn-route"
              >
                ПРОЛОЖИТЬ МАРШРУТ В НАВИГАТОРЕ →
              </a>
            </div>
          </div>
        </section>

        {/* НИЖНИЙ БЛОК: КАНАЛЫ СВЯЗИ И БРОНЬ */}
        <section className="val-comms-grid">
          <div className="val-comm-card">
            <span className="val-code">COMMS // 01</span>
            <h3>ПРЯМАЯ СВЯЗЬ С БАЗОЙ</h3>
            <p>+7 (999) 000-46-55 — бронирование столов для сквадов и предзаказ кофе ко времени.</p>
          </div>

          <div className="val-comm-card">
            <span className="val-code">COMMS // 02</span>
            <h3>КАНАЛ ПРОТОКОЛА (TG)</h3>
            <p>@valcafe_protocol — анонсы ночных просмотров турниров VCT и секретные промокоды.</p>
          </div>

          <div className="val-comm-card">
            <span className="val-code">COMMS // 03</span>
            <h3>ДЛЯ ОРГАНИЗАТОРОВ</h3>
            <p>hq@valcafe.ru — проведение локальных лан-встреч, квизов и каппингов.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
