import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    fetch('./users.json')
      .then(response => response.json())
      .then(users => {
        console.log('Users fetched:', users); // Adicione isso para verificar os usuários
        const user = users.find(
          (user: { username: string; password: string }) => user.username === username && user.password === password
        );
        if (user) {
          setIsAuthenticated(true);
        } else {
          alert('Invalid credentials');
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
