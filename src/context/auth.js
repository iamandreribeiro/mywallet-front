import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");

  return (
    <AuthContext.Provider
      value={{
        userEmail: userEmail,
        setUserEmail: setUserEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
