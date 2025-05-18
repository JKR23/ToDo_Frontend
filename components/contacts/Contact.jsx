import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function Contact() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });

 const handleChange = (e) => {
  setFormData((prev) => ({
   ...prev,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  // À connecter avec un backend ou un service externe plus tard
  console.log("Message envoyé :", formData);
  alert("Message envoyé !");
  setFormData({ name: "", email: "", message: "" });
 };

 return (
  <section className="max-w-xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
   <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">
    Contactez-nous
   </h2>
   <form onSubmit={handleSubmit} className="space-y-4">
    <input
     type="text"
     name="name"
     value={formData.name}
     onChange={handleChange}
     placeholder="Votre nom"
     required
     className="w-full p-2 border border-gray-300 rounded"
    />
    <input
     type="email"
     name="email"
     value={formData.email}
     onChange={handleChange}
     placeholder="Votre email"
     required
     className="w-full p-2 border border-gray-300 rounded"
    />
    <textarea
     name="message"
     value={formData.message}
     onChange={handleChange}
     placeholder="Votre message"
     required
     rows="4"
     className="w-full p-2 border border-gray-300 rounded"
    ></textarea>
    <PrimaryButton>Envoyer</PrimaryButton>
   </form>
  </section>
 );
}
