"use client";
import { useState } from "react";
import { validateLoginForm } from "@/validation/formValidation.js";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";

import LoginButton from "./LoginButton";

export default function LoginForm({ onSwitch }) {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const { setIsAuthenticated, setView } = useAuth();
 const router = useRouter();

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  //creer une var via ces deux champs
  const loginData = { email, password };

  //valider ces ce var
  const validationErrors = validateLoginForm(loginData);

  if (Object.keys(validationErrors).length > 0) {
   setError(Object.values(validationErrors)[0]);
   return;
  }

  try {
   //faire une requete a notre api du backend
   const res = await fetch(
    "https://todo-userservice.onrender.com/api/user-service/authentication/logIn",
    {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(loginData),
    }
   );

   //si requete ait marchE
   if (res.ok) {
    const data = await res.json(); //retourne un token
    console.log("Connexion réussie :", data);

    // Stocke le token en localStorage
    localStorage.setItem("authToken", data);

    //rendre user connected and change the view (page)
    setIsAuthenticated(true);
    setView("dashboard");

    router.push("/dashboard");

    //vider les champs si connexion reussi
    setEmail("");
    setPassword("");
   } else {
    let errorMessage = "Échec de la connexion.";
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
     const errorData = await res.json();
     errorMessage = errorData.errorMessage || errorMessage;
    }
    setError(errorMessage);
    console.error("Erreur de connexion :", errorMessage);
   }
  } catch (err) {
   console.error("Erreur réseau :", err);
   setError("Erreur de connexion avec le serveur.");
  }
 };

 return (
  <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded text-gray-900">
   <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>

   <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full mb-3 p-2 border rounded placeholder-gray-500 text-gray-900"
   />

   <input
    type="password"
    placeholder="Mot de passe"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full mb-3 p-2 border rounded placeholder-gray-500 text-gray-900"
   />
   {error && (
    <p className="text-red-600 text-sm mb-3 text-center italic">{error}</p>
   )}

   <LoginButton onClick={handleSubmit} />

   <p className="text-sm mt-4 text-center text-gray-700">
    Vous n'avez pas de compte ?{" "}
    <button
     onClick={onSwitch}
     className="text-blue-600 hover:underline font-medium"
    >
     S'inscrire
    </button>
   </p>
  </div>
 );
}
