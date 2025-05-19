// context/AuthContext.jsx : il fait le lien entre nos onglets-headers et nos pages
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
 const [view, setView] = useState("welcome");
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 // Vérifie si un token est présent dans localStorage
 useEffect(() => {
  const token = localStorage.getItem("authToken");
  if (token) {
   setIsAuthenticated(true);
   setView("dashboard");
  }
 }, []);

 return (
  <AuthContext.Provider
   value={{
    view,
    setView,
    isAuthenticated,
    setIsAuthenticated,
   }}
  >
   {children}
  </AuthContext.Provider>
 );
}

export function useAuth() {
 const context = useContext(AuthContext);
 if (!context) throw new Error("useAuth must be used within AuthProvider");
 return context;
}
