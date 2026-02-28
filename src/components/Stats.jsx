import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    let frameId = 0;

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Certifications", value: 20, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Projects", value: 3, suffix: "+" },
  { label: "Learning Journey", value: 2, suffix: "+ Years" }
];

export default function Stats() {
  return (
    <section id="stats" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Impact Snapshot
      </motion.h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="glass-card p-6 text-center glow-hover"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="text-3xl font-extrabold text-cyan-300">
              <Counter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
