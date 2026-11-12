import React, { useState } from 'react';
import './Auth.css'

export default function Auth() {
  // Имитация состояния пользователя (null — не вошел, объект — вошел)
  const [mockUser, setMockUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  // Поля формы
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Имитация отправки формы без БД
  const handleMockSubmit = (e) => {
    e.preventDefault();
    setMockUser({ username: username || 'Jett_Agent' });
    setIsOpen(false);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>

      {/* 1. КНОПКА В ПРАВОМ ВЕРХНЕМ УГЛУ */}
      <div className="val-auth-corner">
        {mockUser ? (
          <div className="val-user-badge">
            <span style={{ color: '#FF4655', fontSize: '12px', fontWeight: 'bold' }}>
              AGENT // {mockUser.username}
            </span>
            <button className="val-logout-btn" onClick={() => setMockUser(null)}>
              ВЫХОД
            </button>
          </div>
        ) : (
          <button className="val-auth-btn-main" onClick={() => setIsOpen(true)}>
            ВХОД // РЕГИСТРАЦИЯ
          </button>
        )}
      </div>

      {/* 2. ВСПЛЫВАЮЩЕЕ ОКНО */}
      {isOpen && (
        <div className="val-modal-overlay" onClick={() => setIsOpen(false)}>
          {/* e.stopPropagation() не дает окну закрыться при клике внутри самой формы */}
          <div className="val-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="val-close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <div style={{ fontSize: '10px', color: '#FF4655', letterSpacing: '0.15em', marginBottom: '4px' }}>
              // PROTOCOL.AUTH_PREVIEW
            </div>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '20px', letterSpacing: '0.05em' }}>
              {isRegister ? 'РЕГИСТРАЦИЯ АГЕНТА' : 'ВХОД В СИСТЕМУ'}
            </h3>

            <form onSubmit={handleMockSubmit}>
              <div className="val-input-group">
                <label className="val-input-label">Позывной (Логин)</label>
                <input
                  type="text"
                  required
                  className="val-input-field"
                  placeholder="Например: Phoenix_RU"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {isRegister && (
                <div className="val-input-group">
                  <label className="val-input-label">Email</label>
                  <input
                    type="email"
                    required
                    className="val-input-field"
                    placeholder="agent@valorant.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              <div className="val-input-group">
                <label className="val-input-label">Пароль</label>
                <input
                  type="password"
                  required
                  className="val-input-field"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="val-auth-btn-main" style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
                {isRegister ? 'СОЗДАТЬ АККАУНТ' : 'ВОЙТИ В СИСТЕМУ'}
              </button>
            </form>

            <div className="val-switch-mode">
              <button
                type="button"
                className="val-switch-btn"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister
                  ? 'Уже есть аккаунт? Перейти ко входу'
                  : 'Нет доступа? Зарегистрироваться'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
