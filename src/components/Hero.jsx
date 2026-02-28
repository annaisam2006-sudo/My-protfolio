import { motion } from "framer-motion";
import profileFormal from "../assets/images/profile-formal.png.jpeg";

export default function Hero() {
  return (
    <section id="home" className="section-container py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
            Welcome To My Portfolio
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Samuel Milton R
          </h1>
          <p className="text-lg font-medium text-slate-200">
            Full Stack Developer | AI & Cloud Enthusiast
          </p>
          <p className="max-w-xl text-slate-300">
            I build scalable, user-focused applications with modern full stack tooling,
            practical AI integration, and cloud-first engineering patterns that are ready
            for real-world deployment.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cyan-300/50 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-300/15"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-300/40 neon-ring animate-pulseRing" />
            <motion.img
              src={profileFormal}
              alt="Samuel Milton formal portrait"
              className="neon-ring h-72 w-72 rounded-full border border-cyan-300/40 object-cover shadow-2xl md:h-80 md:w-80"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
