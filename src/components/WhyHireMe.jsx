import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Strong AI foundation",
  "Cloud knowledge",
  "Full Stack expertise",
  "Industry certifications",
  "Agile methodology knowledge",
  "Continuous learner mindset"
];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Why Hire Me
      </motion.h2>
      <p className="section-subtitle">Value I bring to modern product and engineering teams.</p>

      <div className="glass-card mt-8 grid gap-4 p-6 md:grid-cols-2">
        {points.map((point, index) => (
          <motion.div
            key={point}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <FaCheckCircle className="mt-1 text-cyan-300" />
            <p className="text-sm text-slate-200">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
