// app/404.js
import Link from "next/link";

export default function NotFound() {
 return (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
   <h1 className="text-6xl font-bold text-red-600">404</h1>
   <h2 className="text-2xl mt-4">Page Not Found</h2>
   <p className="mt-2 text-xl">Oups ! Cette page n'existe pas.</p>
   <Link href="/" className="mt-4 text-blue-600 underline">
    Retourner à la page d'accueil
   </Link>
  </div>
 );
}
