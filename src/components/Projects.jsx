import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart AI SOS System",
    description:
      "An intelligent emergency response platform that detects high-risk situations and triggers real-time alert workflows.",
    stack: ["React", "Node.js", "AI APIs", "Cloud Functions"]
  },
  {
    title: "Clean City Connect",
    description:
      "A civic-tech web platform enabling citizens to report urban sanitation issues with location tracking and status updates.",
    stack: ["React", "Express", "MongoDB", "Map APIs"]
  },
  {
    title: "AI Chat Assistant",
    description:
      "A context-aware assistant for productivity and support use cases with intent-based responses and extensible integrations.",
    stack: ["React", "Python", "LLM APIs", "Firebase"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <p className="section-subtitle">Selected builds that combine product engineering and AI.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card glow-hover flex h-full flex-col p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-purple-300/35 bg-purple-400/10 px-3 py-1 text-xs text-purple-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              {/* Replace with GitHub API integration later */}
              <a
                href="#"
                className="rounded-full border border-cyan-300/50 px-4 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-300/15"
              >
                View Code
              </a>
              <a
                href="#"
                className="rounded-full border border-purple-300/45 px-4 py-2 text-xs font-semibold text-purple-200 transition-colors hover:bg-purple-300/15"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
