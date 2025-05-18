import PrimaryButton from "./PrimaryButton";

export default function Welcome({ onStart }) {
 return (
  <section className="flex flex-col justify-center items-center text-center bg-gray-100 w-full h-full">
   <h1 className="text-4xl font-bold text-blue-600 mb-4">
    Bienvenue sur MyToDo
   </h1>
   <p className="text-gray-700 text-lg max-w-xl mb-6">
    Gérer vos utilisateurs et leurs tâches n’a jamais été aussi simple.
   </p>
   <PrimaryButton onClick={onStart}>Commencer</PrimaryButton>
  </section>
 );
}
