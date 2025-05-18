// context/AuthContext.jsx : il fait le lien entre nos onglets headers et nos pages
"use client";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
 const [view, setView] = useState("welcome");

 return (
  <AuthContext.Provider value={{ view, setView }}>
   {children}
  </AuthContext.Provider>
 );
}

export function useAuth() {
 const context = useContext(AuthContext);
 if (!context) throw new Error("useAuth must be used within AuthProvider");
 return context;
}
