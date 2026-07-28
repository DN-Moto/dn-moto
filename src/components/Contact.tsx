"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bike: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        bike: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0b0d0f] py-32"
    >
      <div className="mx-auto max-w-6xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Request Service
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-gray-400">
            Have a question or need maintenance?
            Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition focus:border-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition focus:border-blue-500"
              required
            />

          </div>

          <input
            type="text"
            placeholder="Bike (Example: 2015 Yamaha TTR125LE)"
            value={form.bike}
            onChange={(e) =>
              setForm({ ...form, bike: e.target.value })
            }
            className="mt-6 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition focus:border-blue-500"
            required
          />

          <textarea
            rows={6}
            placeholder="Tell me what you need..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="mt-6 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none transition focus:border-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Request"}
          </button>

          {success && (
            <p className="mt-6 text-green-400 font-semibold">
              ✓ Your request has been sent successfully!
            </p>
          )}

        </motion.form>

      </div>
    </section>
  );
}