import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-12 border-t dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center gap-3">

        <SocialLinks size="sm" />

        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Sunil Rathod — Portfolio
        </p>
      </div>
    </footer>
  );
}
