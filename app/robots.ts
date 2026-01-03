export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sunilrathod.vercel.app/sitemap.xml",
  };
}
