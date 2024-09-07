import React, { useState, useEffect } from 'react';
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem('isAuthenticated') === 'true' || false
  );
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log('Login bem-sucedido');
      setIsAuthenticated(true);
      setCurrentUser(username);
      localStorage.setItem('isAuthenticated', 'true'); // Armazena o estado de autenticação
    } else {
      console.log('Falha no login: Usuário ou senha incorretos');
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.setItem('isAuthenticated', 'false'); // Remove o estado de autenticação
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Set the username if needed, in real apps this could be fetched from a secure source
      setCurrentUser('testuser');
    }
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <AppLayout logout={logout} username={currentUser || ''} />
      ) : (
        <LoginForm login={login} />
      )}
    </Router>
  );
}

export default App;
