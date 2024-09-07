import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import AppLayout from './Core/Layout/AppLayout';

const simulatedUsers = [
  { username: 'testuser', password: 'testpassword' },
];

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    setTimeout(() => {
      const user = simulatedUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        alert('Invalid username or password');
      }
    }, 1000);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Rota protegida */}
        <Route path="/" element={<ProtectedRoute><AppLayout logout={logout} /></ProtectedRoute>} />
        {/* Rota de login */}
        <Route path="/login" element={<LoginForm login={login} />} />
      </Routes>
    </Router>
  );
};

export default App;
