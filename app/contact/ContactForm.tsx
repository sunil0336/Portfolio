"use client";

import { useState } from "react";
import SocialLinks from "../components/SocialLinks";
import Reveal from "../components/Reveal";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.message || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 space-y-12">
      {/* Heading */}
      <Reveal>
        <h1 className="text-3xl font-bold text-center">Contact</h1>
      </Reveal>

      {/* Content */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - SVG */}
          <div className="flex justify-center">
            <img
              src="/mailsent.svg"
              alt="Contact illustration"
              className="w-full max-w-sm"
            />
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 placeholder:text-gray-500"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 placeholder:text-gray-500"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 placeholder:text-gray-500"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full border rounded py-2 font-medium disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-sm">
                Message sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </Reveal>

      {/* Social Links */}
      <div className="flex justify-center pt-6">
        <SocialLinks size="lg" />
      </div>
    </section>
  );
}