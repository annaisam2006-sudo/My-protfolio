import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const certificateMap = import.meta.glob("../assets/images/certificates/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default"
});

const certificates = Object.entries(certificateMap)
  .map(([path, src]) => {
    const filename = path.split("/").pop() || "Certificate";
    const title = filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    return { src, title };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

export default function CertificateGallery() {
  const [selected, setSelected] = useState(null);
  const gallery = useMemo(() => certificates, []);

  return (
    <section id="certificate-gallery" className="section-container py-16 md:py-20">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certificate Gallery
      </motion.h2>
      <p className="section-subtitle">
        Verified credentials across AI, development, cloud, and technical foundations.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.button
            key={item.src}
            type="button"
            className="group glass-card overflow-hidden text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelected(item)}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <p className="min-h-10 text-sm font-medium text-slate-200">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950/90 p-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white"
                onClick={() => setSelected(null)}
                aria-label="Close certificate preview"
              >
                <FaTimes />
              </button>
              <img
                src={selected.src}
                alt={selected.title}
                className="max-h-[86vh] w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
