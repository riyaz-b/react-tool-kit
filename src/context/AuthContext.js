import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const defaultCredentials = {
  username: 'riyaz',
  password: 'riyaz'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === defaultCredentials.username && password === defaultCredentials.password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};