import React, { useState } from 'react';
import './ValorantCards.css';

const cardsData = [
  {
    id: 1,
    category: 'СОБЫТИЕ',
    title: 'WATCH PARTY: VCT FINALS',
    description: 'Занимай позицию у большого экрана! Включаем трансляцию финала турнира, завариваем двойной эспрессо. Ошибки не прощаются.',
    tags: ['LIVE', 'VCT'],
    btnText: 'ЗАБРОНИРОВАТЬ СТОЙКУ',
    themeClass: 'theme-red-card',
    discount: '-10%'
  },
  {
    id: 2,
    category: 'АКЦИЯ',
    title: 'СЕТ «ДУЭЛЯНТ»: РЫВОК',
    description: 'Хватит эко-раундов. Двойной фильтр-кофе и горячий панини с рваной говядиной по специальной цене. Быстрый буст энергии.',
    tags: ['PROMO', 'COMBO'],
    btnText: 'КУПИТЬ В ЗАКУПЕ',
    themeClass: 'theme-red-card',
    discount: '-25%'
  },
  {
    id: 3,
    category: 'НОВЫЙ НАПИТОК',
    title: 'NEON: SPARK LATTE',
    description: 'Цитрусовый юзу, яркая синяя матча и двойной шот эспрессо с искристой взрывной крошкой. Бьет по сонливости быстрее всех.',
    tags: ['AGENT', 'NEW'],
    btnText: 'В КОРЗИНУ',
    themeClass: 'theme-blue-card',
    discount: 'NEW'
  },
  {
    id: 4,
    category: 'ИНТЕРАКТИВ',
    title: 'CAFE BATTLE PASS',
    description: 'Каждая чашка приближает тебя к рангу Радианита. Копи XP с заказов, открывай эксклюзивные мерч-брелки и секретное меню.',
    tags: ['XP', 'PASS'],
    btnText: 'ПРОВЕРИТЬ XP',
    themeClass: 'theme-blue-card',
    discount: 'XP x2'
  }
];

export default function ValorantCafeCards() {
  const [openedCards, setOpenedCards] = useState({});
  const [glitchingCards, setGlitchingCards] = useState({});

  const handleCardClick = (id) => {
    if (openedCards[id]) return;

    setGlitchingCards(prev => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setOpenedCards(prev => ({ ...prev, [id]: true }));
    }, 120);

    setTimeout(() => {
      setGlitchingCards(prev => ({ ...prev, [id]: false }));
    }, 500);
  };

  return (
    <div className="bg-[#0b1017] min-h-screen text-[#EEEEEE] py-12 px-4 font-sans select-none">
      
      <div className="max-w-md mx-auto border-l-4 border-[#FF4655] pl-3 mb-12">
        <p className="text-[10px] tracking-widest text-[#FF4655] font-mono font-bold animate-pulse">// NIGHT.MARKET // ARRIVAL</p>
        <h2 className="text-2xl font-black uppercase tracking-wider text-white mt-1">СЕКРЕТНЫЕ ПРЕДЛОЖЕНИЯ</h2>
      </div>

      <div className="market-grid-container">
        {cardsData.map((card) => {
          const isOpened = !!openedCards[card.id];
          const isGlitching = !!glitchingCards[card.id];

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
            
            {/* Контейнер в одну строку (row) с выравниванием по низу букв */}
            <div 
                style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'flex-end', 
                marginTop: '20px',
                userSelect: 'none'
                }}
            >
                {/* Основной БЕЛЫЙ текст */}
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
                
                {/* Микро-текст: правее и слегка опущен под линию основного текста */}
                <span 
                style={{ 
                    color: '#FF4655', 
                    fontSize: '7.5px', 
                    fontFamily: 'monospace', 
                    opacity: 0.8, 
                    marginLeft: '4px',    /* Отступ вправо от текста */
                    marginBottom: '-3px', /* Сдвиг вниз, чтобы быть «прямо под» правым краем */
                    textTransform: 'lowercase'
                }}
                >
                .sys_lock_0{card.id}
                </span>
            </div>
            </div>



              {/* ЛИЦЕВАЯ СТОРОНА */}
              <div className="card-layer justify-between">
                <div className="market-discount-badge">
                  {card.discount}
                </div>

                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 block mb-1 font-mono">
                    // {card.category}
                  </span>
                  <h3 className="text-xs font-black tracking-wide uppercase mb-2 text-white leading-tight min-h-[32px] pr-8 flex items-center">
                    {card.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 leading-normal line-clamp-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {card.tags.map((tag, idx) => (
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
