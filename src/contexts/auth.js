import React, { createContext, useEffect, useState } from "react";
// import * as Auth from '../services/auth'

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("@app::user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
      setSigned(true);
    }
  }, [setSigned]);

  function ExitToApp() {
    localStorage.removeItem("@app::user");
    setSigned(false);
    return true;
  }

  return (
    <AuthContext.Provider
      value={{ signed, setSigned, user, setUser, ExitToApp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
