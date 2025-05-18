//app/page.js
import { AuthProvider } from "@/components/context/AuthContext";
import AuthPage from "@/app/authPage/page";

export default function Home() {
 return (
  <AuthProvider>
   <AuthPage />
  </AuthProvider>
 );
}
