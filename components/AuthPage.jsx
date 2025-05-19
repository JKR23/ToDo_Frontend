// components/AuthPage.tsx
"use client";
import { useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";

import Welcome from "@/components/welcome/Welcome";
import LoginForm from "@/components/form/login/LoginForm";
import SigninForm from "@/components/form/signin/SigninForm";

export default function AuthPage() {
 const { view, setView, isAuthenticated } = useAuth();
 const router = useRouter();

 // Gestion de redirection automatique si déconnecté
 useEffect(() => {
  if (!isAuthenticated && view === "dashboard") {
   setView("welcome");
   router.push("/");
  }
 }, [isAuthenticated, view, setView, router]);

 console.log("Vue actuelle:", view);

 const handleStart = () => setView("login");
 const switchToRegister = () => setView("register");
 const switchToLogin = () => setView("login");

 return (
  <div className="flex flex-grow items-center justify-center bg-gray-50 w-full h-full">
   {view === "welcome" && <Welcome onStart={handleStart} />}
   {view === "login" && <LoginForm onSwitch={switchToRegister} />}
   {view === "register" && <SigninForm onSwitch={switchToLogin} />}
  </div>
 );
}
