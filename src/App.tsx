import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import AppLayout from './Core/Layout/AppLayout';

const users = [
  {
    username: 'testuser',
    password: 'testpassword',
  },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      console.log('Login bem-sucedido');
      setIsAuthenticated(true);
    } else {
      console.log('Falha no login: Usuário ou senha incorretos');
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <AppLayout logout={logout} />
      ) : (
        <LoginForm login={login} />
      )}
    </Router>
  );
}

export default App;
