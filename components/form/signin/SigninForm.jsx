"use client";
import { useState } from "react";
import SigninButton from "./SigninButton";

import { validateSignupForm } from "@/validation/formValidation.js";

export default function SigninForm({ onSwitch }) {
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [successMessage, setSuccessMessage] = useState("");
 const [error, setError] = useState("");

 const [pictureUrl] = useState(
  "https://img.freepik.com/vecteurs-premium/homme-modele-conception-logo-personnage-uniforme_409025-623.jpg?w=826"
 );

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccessMessage("");

  const userData = {
   email,
   password,
   profile: {
    pictureUrl,
    username,
   },
  };

  const validationErrors = validateSignupForm({
   email,
   password,
   username,
  });

  if (Object.keys(validationErrors).length > 0) {
   return setError(Object.values(validationErrors)[0]);
  }

  try {
   const res = await fetch(
    "https://todo-userservice.onrender.com/api/user-service/authentication/signUp",
    {
     method: "POST",
     headers: {
      "Content-Type": "application/json",
     },
     body: JSON.stringify(userData),
    }
   );

   const contentType = res.headers.get("content-type");

   if (res.ok) {
    let data;
    try {
     // essaie de parser JSON, sinon lit en texte brut
     data = contentType?.includes("application/json")
      ? await res.json()
      : { message: await res.text() };
    } catch {
     data = { message: "Inscription réussie." };
    }

    // Affiche le message de succès
    setSuccessMessage(data.message || "Inscription réussie.");
    // Vide les champs
    setUsername("");
    setEmail("");
    setPassword("");
   } else {
    let errorMessage = "Échec de l'inscription.";
    try {
     const errorData = contentType?.includes("application/json")
      ? await res.json()
      : { errorMessage: await res.text() };

     if (Array.isArray(errorData.errors)) {
      errorMessage = errorData.errors.map((e) => e.defaultMessage).join(", ");
     } else {
      errorMessage =
       errorData.errorMessage || errorData.message || errorMessage;
     }
    } catch {
     errorMessage = "Erreur inattendue du serveur.";
    }
    setError(errorMessage);
   }
  } catch (err) {
   console.error("Erreur réseau :", err);
   setError("Erreur de connexion avec le serveur.");
  }
 };

 return (
  <form
   onSubmit={handleSubmit}
   className="max-w-sm mx-auto p-6 bg-white shadow-md rounded text-gray-900"
  >
   <h2 className="text-2xl font-bold mb-4 text-center">Créer un compte</h2>

   {successMessage && (
    <p className="text-green-600 text-sm mb-3 text-center italic">
     {successMessage}
    </p>
   )}

   <input
    type="text"
    placeholder="Nom d'utilisateur"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full mb-3 p-2 border rounded placeholder-gray-500"
    required
   />

   <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full mb-3 p-2 border rounded placeholder-gray-500"
    required
   />

   <input
    type="password"
    placeholder="Mot de passe"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full mb-3 p-2 border rounded placeholder-gray-500"
    required
   />
   {error && (
    <p className="text-red-600 text-sm mb-3 text-center italic">{error}</p>
   )}

   <SigninButton onClick={handleSubmit} />

   <p className="text-sm mt-4 text-center text-gray-700">
    Vous avez déjà un compte ?{" "}
    <button
     type="button"
     onClick={onSwitch}
     className="text-blue-600 hover:underline font-medium"
    >
     Se connecter
    </button>
   </p>
  </form>
 );
}
