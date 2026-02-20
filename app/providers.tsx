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
        theme === "dark" ? "dark bg-gradient-to-br from-[#020617] via-[#020617] to-[#101828] text-white min-h-screen" : "from-[#e0e7ff] via-[#eef2ff] to-[#f5f3ff] text-black min-h-screen"
      }
    >
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
    </div>
  );
}
