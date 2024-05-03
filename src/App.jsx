import React, { useState } from 'react';
import './App.css';
import ClientList from './components/ClientList';
import Navigation from './components/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Navigation onLogout={handleLogout} />
          <ClientList />
        </>
      ) : (
        <>
          <h1>Login</h1>
          <form>
            <label>
              Usuário:
              <input type="text" />
            </label>
            <label>
              Senha:
              <input type="password" />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
