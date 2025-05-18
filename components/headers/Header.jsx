"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/ToDoLogo5.png";

export default function Header() {
 return (
  <header className="bg-blue-600 p-4 shadow-md">
   <div className="flex items-center justify-between">
    {/* Logo + Titre */}
    <div className="flex items-center gap-4">
     <Image src={logo} alt="Logo ToDo" width={50} height={50} />
     <h1 className="text-white text-2xl font-bold">MyToDo</h1>
    </div>

    {/* Menu */}
    <nav>
     <ul className="flex space-x-8">
      <li>
       <Link
        href="/"
        className="text-white font-semibold text-lg hover:text-blue-300 transition-colors"
       >
        Home
       </Link>
      </li>
      <li>
       <Link
        href="/dashboard"
        className="text-white font-semibold text-lg hover:text-blue-300 transition-colors"
       >
        Dashboard
       </Link>
      </li>
      <li>
       <Link
        href="/admin-dashboard"
        className="text-white font-semibold text-lg hover:text-blue-300 transition-colors"
       >
        AdminDashboard
       </Link>
      </li>
      <li>
       <Link
        href="/contact"
        className="text-white font-semibold text-lg hover:text-blue-300 transition-colors"
       >
        Contact
       </Link>
      </li>
      <li>
       <Link
        href="/login"
        className="text-white font-semibold text-lg hover:text-blue-300 transition-colors"
       >
        Déconnexion
       </Link>
      </li>
     </ul>
    </nav>
   </div>
  </header>
 );
}
