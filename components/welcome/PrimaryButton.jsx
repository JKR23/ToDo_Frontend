export default function PrimaryButton({ children, onClick }) {
 return (
  <button
   onClick={onClick}
   className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
  >
   {children}
  </button>
 );
}
