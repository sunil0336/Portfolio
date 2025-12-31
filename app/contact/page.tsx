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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
    <section className="min-h-screen max-w-xl mx-auto px-4 flex flex-col justify-center space-y-8">
      <Reveal>
      <h1 className="text-3xl font-bold text-center">Contact</h1>
      </Reveal>
      
      <Reveal>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full border rounded py-2 font-medium"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm mt-2">
            Message sent successfully.
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}

      </form>
      </Reveal>
      <div className="flex justify-center">
        <SocialLinks size="lg" />
      </div>
    </section>
  );
}
