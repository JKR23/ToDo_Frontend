export default function LoginButton({ onClick }) {
 return (
  <button
   onClick={onClick}
   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  >
   Se connecter
  </button>
 );
}
