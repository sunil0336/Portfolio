export default function Page() {
  return (
    <section className="min-h-screen max-w-xl mx-auto px-4 flex flex-col justify-center space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Feel free to reach out for collaborations or opportunities.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="button"
          className="w-full border rounded py-2 font-medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
