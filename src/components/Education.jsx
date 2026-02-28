import { motion } from "framer-motion";

const educationItems = [
  {
    title: "B.Tech Information Technology",
    period: "2024-2028",
    detail: "Focused on software engineering, AI fundamentals, and cloud technologies."
  },
  {
    title: "Higher Secondary Education",
    period: "Completed",
    detail: "Built a strong foundation in mathematics, computer science, and communication."
  }
];

export default function Education() {
  return (
    <section id="education" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <p className="section-subtitle">Academic milestones and learning progression.</p>

      <div className="relative mt-10 space-y-8 border-l border-cyan-400/30 pl-6">
        {educationItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            className="glass-card glow-hover relative p-5"
          >
            <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-cyan-300 shadow-glow" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {item.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
