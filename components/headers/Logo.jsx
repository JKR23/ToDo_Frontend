"use client";
import Image from "next/image";
import logo from "@/public/ToDoLogo5.png";

export default function Logo() {
 return (
  <div className="flex items-center gap-4">
   <Image src={logo} alt="Logo ToDo" width={50} height={50} />
   <h1 className="text-white text-2xl font-bold">MyToDo</h1>
  </div>
 );
}
