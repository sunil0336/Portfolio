"use client";

import Link from "next/link";

type Props = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

function Navbar({ theme, setTheme }: Props) {
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="p-4 border-b dark:border-gray-700">
      <div className="flex justify-between">
        <h1 className="font-bold">Sunil</h1>
        <p>Current theme: {theme}</p>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <button onClick={handleTheme}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
