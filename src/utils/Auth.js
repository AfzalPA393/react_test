import { createContext, useContext, useState } from "react";
// This is the data layer
export const AuthContext = createContext(null);
// Build a provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authTokens, setAuthTokens] = useState(null);
  
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// This is how we use inside of a component
export const useAuth = () => {
  return useContext(AuthContext);
};
