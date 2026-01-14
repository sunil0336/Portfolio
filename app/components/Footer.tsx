import SocialLinks from "./SocialLinks";
import { FaRegFilePdf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center gap-3
        md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <SocialLinks size="sm" />

          <a
            href="***"
            target="_blank"
            className="
              flex items-center gap-2 px-3 py-1.5 text-sm
              rounded-full
              border bg-white dark:bg-gray-900 dark:border-gray-700
              hover:bg-blue-50 dark:hover:bg-blue-900/30
              hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300
              transition
            "
          >
            <FaRegFilePdf size={13} />
            Resume
          </a>

        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} Sunil Rathod — Portfolio
        </p>
      </div>
    </footer>
  );
}
