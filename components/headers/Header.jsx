"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
 const { isAuthenticated } = useAuth();
 const [ready, setReady] = useState(false);

 useEffect(() => {
  setReady(true);
 }, [isAuthenticated]);

 if (!ready) return null;

 return (
  <header
   key={isAuthenticated ? "auth" : "guest"}
   className="bg-blue-600 p-4 shadow-md"
  >
   <div className="flex items-center justify-between">
    <Logo />
    <NavigationMenu key={isAuthenticated ? "auth" : "guest"} />
   </div>
  </header>
 );
}
