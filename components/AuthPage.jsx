"use client";
import { useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";

import WelcomeMessage from "@/components/welcome/Welcome"; // Nouveau composant sans bouton
import LoginForm from "@/components/form/login/LoginForm";
import SigninForm from "@/components/form/signin/SigninForm";

export default function AuthPage() {
 const { view, setView, isAuthenticated } = useAuth();
 const router = useRouter();

 useEffect(() => {
  if (!isAuthenticated && view === "dashboard") {
   setView("welcome");
   router.push("/");
  }
 }, [isAuthenticated, view, setView, router]);

 const switchToRegister = () => setView("register");
 const switchToLogin = () => setView("login");

 return (
  <div className="flex flex-grow h-full w-full bg-gray-100">
   {(view === "welcome" || view === "login") && (
    <div className="flex flex-1">
     {/* Colonne gauche */}
     <div className="w-1/2 flex items-center justify-center bg-blue-50 p-10">
      <WelcomeMessage />
     </div>

     {/* Colonne droite */}
     <div className="w-1/2 flex items-center justify-center p-10">
      <LoginForm onSwitch={switchToRegister} />
     </div>
    </div>
   )}

   {view === "register" && (
    <div className="flex flex-grow items-center justify-center w-full">
     <SigninForm onSwitch={switchToLogin} />
    </div>
   )}
  </div>
 );
}
