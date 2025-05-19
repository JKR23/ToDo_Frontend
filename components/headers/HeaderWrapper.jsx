"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import Header from "./Header";

export default function HeaderWrapper() {
 const { isAuthenticated } = useAuth();
 const [key, setKey] = useState("guest");

 useEffect(() => {
  setKey(isAuthenticated ? "auth" : "guest");
 }, [isAuthenticated]);

 return <Header key={key} />;
}
