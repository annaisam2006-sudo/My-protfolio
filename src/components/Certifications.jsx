import { motion } from "framer-motion";

const categories = [
  {
    title: "AI & ML",
    items: ["Introduction to AI", "Introduction to Deep Learning", "NLP Foundations"]
  },
  {
    title: "Software Development",
    items: ["Java Developer Track", "TypeScript", "Web Development"]
  },
  {
    title: "Cloud & Agile",
    items: ["AWS Solution Architect Concepts", "Agile Software Development"]
  },
  {
    title: "Professional Development",
    items: ["Soft Skills", "Human Values", "Industry Readiness"]
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <p className="section-subtitle">
        Category-wise highlights across AI, software, cloud, and professional development.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {categories.map((category, index) => (
          <motion.article
            key={category.title}
            className="glass-card glow-hover p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-cyan-200">{category.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {category.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
