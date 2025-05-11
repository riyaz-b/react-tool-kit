import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === 'riyaz' && password === 'riyaz') {
      setIsAuthenticated(true);
      setUser({ username });
      navigate('/dashboard');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const bypassLogin = () => {
    setIsAuthenticated(true);
    setUser({ username: 'bypass' });
    navigate('/dashboard');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, bypassLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;