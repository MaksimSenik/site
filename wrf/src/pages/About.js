import React, { useState } from 'react';
import './About.css';

const zones = [
  {
    id: 'SITE A',
    name: 'ЭСПРЕССО-БАР // ТОЧКА ВЫСАДКИ',
    desc: 'Контактная стойка из матовой стали и архитектурного бетона. Максимальная скорость выдачи, открытый процесс приготовления и живое общение с бариста.',
    specs: ['Скорость выдачи: ~45 сек', 'Формат: С собой / У стойки']
  },
  {
    id: 'MID',
    name: 'ТАКТИЧЕСКИЙ ЛАУНЖ',
    desc: 'Основной зал с приглушенным светом, акустическим комфортом и удобной посадкой. Оснащен скоростным Wi-Fi и розетками у каждого посадочного места.',
    specs: ['Посадка: 32 места', 'Формат: Работа / Встречи / Отдых']
  },
  {
    id: 'SITE B',
    name: 'БРЮ-БАР // ЛАБОРАТОРИЯ',
    desc: 'Зона медленного кофе и экспериментов. Здесь заваривают редкие микролоты в воронке V60, аэропрессе и кемексе с контролем температуры до 0.1°C.',
    specs: ['Экстракция: Ручной пролив', 'Формат: Дегустация вкуса']
  }
];

const arsenal = [
  {
    code: 'GEAR // 01',
    title: 'КАСТОМНЫЙ ЭСПРЕССО-АРСЕНАЛ',
    desc: 'Мы настроили мультибойлерные кофемашины с прецизионным контролем давления. Это гарантирует стабильную, плотную текстуру эспрессо в каждой чашке.'
  },
  {
    code: 'GEAR // 02',
    title: 'ЕЖЕНЕДЕЛЬНАЯ ОБЖАРКА',
    desc: 'Зерно поступает в val//cafe не позднее 7 дней после ростера. Мы работаем с проверенными фермами Эфиопии, Колумбии и Бразилии, раскрывая природную сладость без горечи.'
  },
  {
    code: 'GEAR // 03',
    title: 'СИСТЕМА ВОДОПОДГОТОВКИ',
    desc: 'Кофе на 98% состоит из воды. Наша пятиступенчатая система фильтрации и реминерализации выстраивает идеальный минеральный баланс для яркого букета.'
  }
];

export default function AboutPage() {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <div className="val-about">
      <div className="val-grid-overlay" />

      <div className="val-container">
        {/* 1. HERO БРИФИНГ */}
        <header className="val-about-hero">
          <div className="val-tag">
            <span className="val-dot" /> LOCATION INTEL // VAL//CAFE
          </div>
          <h1 className="val-title">
            НЕЙТРАЛЬНАЯ ЗОНА <span className="val-accent">МЕЖДУ МИРАМИ</span>
          </h1>
          <p className="val-lead">
            <strong>val//cafe</strong> — это городская спешелти-кофейня, вдохновленная тактической 
            эстетикой вселенной VALORANT. Мы переосмыслили формат закрытой базы агентов: 
            вместо секретных миссий здесь готовят эталонный кофе, а вместо напряженных 
            раундов царит атмосфера уютного убежища в центре города.
          </p>
        </header>

        {/* 2. ИСТОРИЯ И АТМОСФЕРА */}
        <section className="val-story-grid">
          <div className="val-story-block">
            <span className="val-subtitle">// КОНЦЕПЦИЯ МЕСТА</span>
            <h2>ПРОСТРАНСТВО БЕЗ СПАЙКА И СУЕТЫ</h2>
            <p>
              Мы хотели создать место, куда хочется зайти не только ради отсылок к любимой игре, 
              но в первую очередь — за безупречной чашкой кофе. В интерьере <strong>val//cafe</strong> 
              сочетаются индустриальный минимализм, графитовые поверхности, теплый свет и фирменные 
              красные акценты.
            </p>
            <p>
              Днем здесь собираются фрилансеры, студенты и ценители спешелти, а по вечерам 
              кофейня превращается в точку притяжения для киберспортивного комьюнити, где можно 
              обсудить свежий патч или просто перезагрузиться после тяжелого дня.
            </p>
          </div>

          <div className="val-protocol-rules">
            <div className="val-rules-header">ПРАВИЛА БАЗЫ // PROTOCOL</div>
            <ul className="val-rules-list">
              <li>
                <span className="val-accent">01.</span> Вкус на первом месте: никаких компромиссов в качестве зерна и молока.
              </li>
              <li>
                <span className="val-accent">02.</span> Свой стакан — бонус: даем скидку 15% за использование многоразовой термокружки.
              </li>
              <li>
                <span className="val-accent">03.</span> Режим «Без спойлеров»: результаты крупных турниров обсуждаем вполголоса.
              </li>
              <li>
                <span className="val-accent">04.</span> Открытый Wi-Fi и зарядные станции доступны каждому гостю без ограничений.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. ИНТЕРАКТИВНАЯ КАРТА ЗАЛА (СЕКТОРА) */}
        <section className="val-section">
          <div className="val-section-header">
            <span className="val-subtitle">// ПЛАН ЛОКАЦИИ</span>
            <h2>СЕКТОРА КОФЕЙНИ</h2>
          </div>

          <div className="val-zones-wrapper">
            <div className="val-zone-tabs">
              {zones.map((zone, index) => (
                <button
                  key={zone.id}
                  className={`val-zone-tab ${activeZone === index ? 'active' : ''}`}
                  onClick={() => setActiveZone(index)}
                >
                  <span className="val-zone-id">{zone.id}</span>
                  <span className="val-zone-short">{zone.name.split('//')[0]}</span>
                </button>
              ))}
            </div>

            <div className="val-zone-display">
              <div className="val-zone-badge">{zones[activeZone].id} // ACTIVE SECTOR</div>
              <h3>{zones[activeZone].name}</h3>
              <p>{zones[activeZone].desc}</p>
              <div className="val-zone-specs">
                {zones[activeZone].specs.map((spec, i) => (
                  <span key={i} className="val-spec-tag">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. АРСЕНАЛ И ЗЕРНО */}
        <section className="val-section">
          <div className="val-section-header">
            <span className="val-subtitle">// ТЕХНИЧЕСКОЕ ОСНАЩЕНИЕ</span>
            <h2>АРСЕНАЛ И ФИЛОСОФИЯ ВКУСА</h2>
          </div>

          <div className="val-cards-grid">
            {arsenal.map((item, idx) => (
              <div key={idx} className="val-card">
                <div className="val-card-top">
                  <span className="val-code">{item.code}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
