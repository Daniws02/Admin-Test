import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import LoginForm from './Components/LoginForm';
import AppLayout from './Core/Layout/AppLayout';

const Home = () => <div>Home Page</div>;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
