import SocialLinks from "./SocialLinks";
import { FaRegFilePdf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center gap-3
        text-gray-700 dark:text-gray-300">

        {/* Social row + Resume icon */}
        <div className="flex items-center gap-3">
          <SocialLinks size="sm" />

          <a
            href="***"
            target="_blank"
            className="
              flex items-center gap-2 px-3 py-1.5 text-sm
              rounded-full
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition
            "
          >
            <FaRegFilePdf size={13} />
            Resume
          </a>
            
        </div>

        <p className="text-xs text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Sunil Rathod — Portfolio
        </p>
      </div>
    </footer>
  );
}
