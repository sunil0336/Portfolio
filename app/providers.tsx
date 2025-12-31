"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  return (
    <div
      className={
        theme === "dark" ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"
      }
    >
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
    </div>
  );
}
