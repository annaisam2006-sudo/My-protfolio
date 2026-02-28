import { motion } from "framer-motion";

const skillGroups = [
  { category: "Programming", skills: ["Java", "Python", "TypeScript", "JavaScript"] },
  { category: "Frontend", skills: ["React", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
  { category: "Backend", skills: ["Node.js", "Express", "REST APIs"] },
  { category: "Database", skills: ["MySQL", "MongoDB", "Firebase"] },
  { category: "AI & ML", skills: ["TensorFlow Basics", "NLP Fundamentals", "Model Workflows"] },
  { category: "Cloud", skills: ["AWS Foundations", "Cloud Deployment", "CI/CD Basics"] }
];

export default function Skills() {
  return (
    <section id="skills" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <p className="section-subtitle">Core technologies and practical capabilities.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.category}
            className="glass-card glow-hover p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
