//Validation frontend
// formValidation.js

export function validateLoginForm({ email, password }) {
 const errors = {};

 if (!email.trim()) {
  errors.email = "L'email ne peut pas être vide.";
 } else if (!/\S+@\S+\.\S+/.test(email)) {
  errors.email = "Format d'email invalide.";
 }

 if (!password.trim()) {
  errors.password = "Le mot de passe est requis.";
 }
 {
  /*} else if (password.length < 8) {
  errors.password = "Le mot de passe doit contenir au moins 8 caractères.";
 }*/
 }

 return errors;
}

export function validateSignupForm({ email, password, username }) {
 const errors = {};

 if (!username.trim()) {
  errors.username = "Le nom d'utilisateur ne peut pas être vide.";
 } else if (username.length < 2 || username.length > 15) {
  errors.username =
   "Le nom d'utilisateur doit contenir entre 2 et 15 caractères.";
 }

 if (!email.trim()) {
  errors.email = "L'email ne peut pas être vide.";
 } else if (!/\S+@\S+\.\S+/.test(email)) {
  errors.email = "Format d'email invalide.";
 }

 if (!password.trim()) {
  errors.password = "Le mot de passe ne peut pas être vide.";
 } else if (password.length < 8) {
  errors.password = "Le mot de passe doit contenir au moins 8 caractères.";
 }

 return errors;
}
