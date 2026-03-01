"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export default function Navbar({ theme, setTheme }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => setOpen(false), [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const linkClass = (href: string) =>
    `px-3 py-1 rounded-full transition 
     ${
       pathname === href
         ? "bg-blue-100 text-blue-700 dark:bg-blue-500 dark:text-blue-100"
         : "hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200"
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg  border-b dark:border-gray-700 font-semibold">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg"><Link href="/" >Sunil</Link> </h1>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 border rounded transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border rounded px-3 py-1"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t dark:border-gray-700 animate-slide">
          <div className="flex flex-col p-3 gap-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1 border rounded transition"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
