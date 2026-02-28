import { motion } from "framer-motion";
import profileCasual from "../assets/images/profile-casual.png.jpeg";

export default function About() {
  return (
    <section id="about" className="section-container py-16 md:py-20">
      <motion.div
        className="glass-card p-6 md:p-10"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              B.Tech IT student (2024-2028) focused on AI engineering, full stack
              development, and cloud-native architecture.
            </p>
            <p className="mt-4 text-slate-300">
              I am passionate about building intelligent systems that blend data,
              automation, and product design into meaningful digital experiences. I aim to
              create robust applications that are scalable, secure, and business-ready.
            </p>
          </div>

          <motion.div
            className="mx-auto max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={profileCasual}
              alt="Samuel Milton casual portrait"
              className="w-full rounded-2xl border border-white/10 object-cover shadow-card"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
