import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
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

        <form className="space-y-4 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-white/15 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/60 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
