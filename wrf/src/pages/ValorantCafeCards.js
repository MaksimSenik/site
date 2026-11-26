import React, { useState, useEffect } from 'react';
import './ValorantCards.css';
import Auth from'./Reg/Auth';

export default function ValorantCafeCards() {
  const [cardsData, setCardsData] = useState([]);
  const [openedCards, setOpenedCards] = useState({});
  const [glitchingCards, setGlitchingCards] = useState({});

  useEffect(() => {
    fetch("http://localhost/cafecards.php")
      .then((response) => response.json())
      .then((json) => setCardsData(json))
      .catch((error) => console.error("Ошибка загрузки карточек:", error));
  }, []); // Пустой массив гарантирует, что запрос выполнится 1 раз при открытии

  const handleCardClick = (id) => {
    if (openedCards[id]) return;

    setGlitchingCards((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setOpenedCards((prev) => ({ ...prev, [id]: true }));
    }, 120);

    setTimeout(() => {
      setGlitchingCards((prev) => ({ ...prev, [id]: false }));
    }, 500);
  };

  // Вспомогательная функция для превращения строки '"LIVE", "VCT"' из БД в массив ['LIVE', 'VCT']
  const parseTags = (tagsString) => {
    if (!tagsString) return [];
    if (Array.isArray(tagsString)) return tagsString;
    return tagsString
      .split(',')
      .map((tag) => tag.replace(/["']/g, '').trim())
      .filter(Boolean);
  };

  return (
    <div className="val-page-bg text-[#EEEEEE] py-12 px-4 select-none">
        {/* 2. Добавляем окно авторизации */}
      <Auth />
      <div className="val-header-container">
        <p className="val-header-sub animate-pulse">
          // NIGHT.MARKET // ARRIVAL
        </p>
        <h2 className="val-header-title">
          СЕКРЕТНЫЕ ПРЕДЛОЖЕНИЯ
        </h2>
      </div>

      <div className="market-grid-container">
        {cardsData.map((card) => {
          const isOpened = !!openedCards[card.id];
          const isGlitching = !!glitchingCards[card.id];
          const tagsArray = parseTags(card.tags);

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`night-market-card-v3 valorant-clip ${card.themeClass}`}
            >
              {/* ЛАЗЕРНЫЙ КЛИК ТРИГГЕР */}
              <div className={`opening-glitch-line ${isGlitching ? 'trigger-glitch-line' : ''}`} />

              {/* РУБАШКА КАРТЫ */}
              <div className={`card-layer market-cover valorant-clip ${isOpened ? 'is-opened' : ''}`}>
                <div className="logo-v">V</div>
                
                <div 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'flex-end', 
                    marginTop: '20px',
                    userSelect: 'none'
                  }}
                >
                  <span 
                    style={{ 
                      color: '#FFFFFF', 
                      fontSize: '11px', 
                      fontFamily: 'monospace', 
                      fontWeight: 'bold', 
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    ОТКРЫТЬ КАРТУ
                  </span>
                  
                  <span 
                    style={{ 
                      color: '#FF4655', 
                      fontSize: '7.5px', 
                      fontFamily: 'monospace', 
                      opacity: 0.8, 
                      marginLeft: '4px',
                      marginBottom: '-3px',
                      textTransform: 'lowercase'
                    }}
                  >
                    .sys_lock_0{card.id}
                  </span>
                </div>
              </div>

              {/* ЛИЦЕВАЯ СТОРОНА */}
              <div className={`card-layer front-card-layout ${isOpened ? 'opened-card' : 'closed-card'}`}>
                <div className="market-discount-badge">
                  {card.discount}
                </div>

                {/* Контейнер верхней части */}
                <div className="card-top-group">
                  <span className="card-category-animated text-[10px] uppercase font-bold tracking-widest text-gray-500 font-mono">
                    // {card.category}
                  </span>
                  
                  <div className="card-hover-content">
                    <h3 
                      className="card-title-single-line uppercase text-white pr-12 mt-2 mb-2"
                      data-text={card.title}
                    >
                      {card.title}
                    </h3>
                    
                    <p className="text-[11px] text-gray-400 leading-normal">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Нижняя часть (теги и кнопка) */}
                <div className="card-hover-footer w-full">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tagsArray.map((tag, idx) => (
                      <span key={idx} className="text-[8px] font-mono font-semibold bg-[#16202c] text-gray-300 px-1.5 py-0.5 border border-[#2b374f] mr-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="val-btn" onClick={(e) => e.stopPropagation()}>
                    <span>{card.btnText}</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

