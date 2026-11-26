import React, { useState, useEffect } from 'react';
import './Auth.css';

const API_URL = 'http://localhost/auth.php';

export default function Auth({ onOpenProfile }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('valcafe_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPhone('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const payload = isRegister
      ? { action: 'register', username, email, phone, password }
      : { action: 'login', username, password };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message || 'Ошибка авторизации');
        setLoading(false);
        return;
      }

      setUser(data.user);
      localStorage.setItem('valcafe_user', JSON.stringify(data.user));
      setIsOpen(false);
      resetForm();
    } catch (err) {
      setError('Не удалось связаться с сервером');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('valcafe_user');
  };

  return (
    <>
      {/* КНОПКА В ПРАВОМ ВЕРХНЕМ УГЛУ */}
      <div className="val-auth-corner">
        {user ? (
          <div className="val-user-badge">
            <button
              type="button"
              className="val-profile-trigger"
              onClick={() => onOpenProfile && onOpenProfile(user)}
            >
              <span className="val-agent-tag">AGENT //</span>
              <span className="val-agent-name">{user.username}</span>
            </button>
            <button type="button" className="val-logout-btn" onClick={handleLogout}>
              ВЫХОД
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="val-auth-btn-main"
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
          >
            ВХОД // РЕГИСТРАЦИЯ
          </button>
        )}
      </div>

      {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
      {isOpen && (
        <div className="val-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="val-modal-box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="val-close-btn" onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <div className="val-modal-code">
              // PROTOCOL.AUTH_{isRegister ? 'REGISTER' : 'LOGIN'}
            </div>
            <h3 className="val-modal-title">
              {isRegister ? 'РЕГИСТРАЦИЯ АГЕНТА' : 'ВХОД В СИСТЕМУ'}
            </h3>

            {error && (
              <div className="val-auth-error">
                <span>[!]</span> {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="val-input-group">
                <label className="val-input-label">Имя / Позывной</label>
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
                <>
                  <div className="val-input-group">
                    <label className="val-input-label">Почта</label>
                    <input
                      type="email"
                      required
                      className="val-input-field"
                      placeholder="agent@valcafe.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="val-input-group">
                    <label className="val-input-label">Номер телефона</label>
                    <input
                      type="tel"
                      required
                      className="val-input-field"
                      placeholder="+7 (999) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </>
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

              <button
                type="submit"
                disabled={loading}
                className="val-auth-btn-main val-submit-full"
              >
                {loading
                  ? 'ЗАГРУЗКА...'
                  : isRegister
                  ? 'СОЗДАТЬ АККАУНТ'
                  : 'ВОЙТИ В СИСТЕМУ'}
              </button>
            </form>

            <div className="val-switch-mode">
              <button
                type="button"
                className="val-switch-btn"
                onClick={() => {
                  setIsRegister(!isRegister);
                  setError('');
                }}
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
