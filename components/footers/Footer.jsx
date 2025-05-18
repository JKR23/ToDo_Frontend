export default function Footer() {
 return (
  <footer className="bg-blue-600 text-white py-6">
   <div className="max-w-6xl mx-auto text-center px-4">
    <p className="text-sm">
     &copy; {new Date().getFullYear()} MyToDo. Tous droits réservés.
    </p>
    <p className="text-xs mt-2">Développé en React & Spring Boot</p>
   </div>
  </footer>
 );
}
