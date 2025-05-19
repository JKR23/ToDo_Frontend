"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";

export default function NavigationMenu() {
 const { isAuthenticated, setIsAuthenticated, setView } = useAuth();
 const router = useRouter();

 const handleLogout = () => {
  localStorage.removeItem("authToken");
  setIsAuthenticated(false);
  setView("welcome");
  router.push("/");
 };

 return (
  <nav>
   <ul className="flex space-x-8">
    {isAuthenticated && (
     <>
      <li>
       <Link
        href="/dashboard"
        className="text-white font-semibold text-lg hover:text-blue-300"
       >
        Dashboard
       </Link>
      </li>
      <li>
       <button
        onClick={handleLogout}
        className="text-white font-semibold text-lg hover:text-blue-300"
       >
        Déconnexion
       </button>
      </li>
     </>
    )}
   </ul>
  </nav>
 );
}
