import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const withTimeout = (promise, timeoutMs = 15000) =>
    Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Request timed out after ${timeoutMs}ms`)), timeoutMs)
      )
    ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("[Contact] Before submit", {
      hasDb: Boolean(db),
      formData
    });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in name, email, and message." });
      return;
    }

    if (!db) {
      setStatus({
        type: "error",
        message: "Firebase is not configured. Check your root .env values and restart Vite."
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      const payload = {
        ...formData,
        createdAt: serverTimestamp()
      };
      console.log("[Contact] Before addDoc", {
        collection: "contactMessages",
        payload
      });

      await withTimeout(addDoc(collection(db, "contactMessages"), payload));

      setFormData({ name: "", phone: "", email: "", message: "" });
      setStatus({ type: "success", message: "Message sent successfully." });
      console.log("[Contact] After success", {
        collection: "contactMessages"
      });
    } catch (error) {
      console.error("[Contact] Submit error", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please check Firebase setup and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <p className="section-subtitle">Let&apos;s discuss opportunities and collaborations.</p>

      <motion.div
        className="glass-card mt-8 grid gap-8 p-6 md:p-8 lg:grid-cols-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white">Connect Professionally</h3>
          <p className="mt-3 text-sm text-slate-300">
            Reach out for internships, collaborations, or full stack and AI-focused
            projects. I usually respond quickly.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="rounded-full border border-white/20 p-3 text-slate-100 transition-colors hover:border-cyan-300/70 hover:text-cyan-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 p-3 text-slate-100 transition-colors hover:border-cyan-300/70 hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="space-y-4 lg:col-span-3" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {status.message}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
