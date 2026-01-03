"use client";
import Link from "next/link";
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
} from "lucide-react";

type Props = {
  size?: "sm" | "md" | "lg";
};

export default function SocialLinks({ size = "md" }: Props) {
  const base =
    size === "lg"
      ? "w-11 h-11"
      : size === "sm"
      ? "w-8 h-8"
      : "w-9 h-9";

  const iconSize =
    size === "lg" ? 22 :
    size === "sm" ? 16 : 18;

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/suniltrathod",
      icon: <Linkedin size={iconSize} />,
    },
    {
      label: "GitHub",
      href: "https://github.com/sunil0336",
      icon: <Github size={iconSize} />,
    },
    {
      label: "Email",
      href: "mailto:sunilrathod.0336@gmail.com",
      icon: <Mail size={iconSize} />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/sunil0336",
      icon: <Instagram size={iconSize} />,
    },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((s) => (
        <Link
          key={s.label}
          href={s.href}
          target="_blank"
          className={`
            flex items-center justify-center rounded-full border
            bg-white dark:bg-gray-900 dark:border-gray-700
            hover:bg-blue-50 dark:hover:bg-blue-900/30
            hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300
            transition ${base}
          `}
          title={s.label}
        >
          {s.icon}
        </Link>
      ))}
    </div>
  );
}
