import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CertificateGallery from "./components/CertificateGallery";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WhyHireMe from "./components/WhyHireMe";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-cyan-400/40 bg-slate-900/80 p-3 text-cyan-300 shadow-glow backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="animated-page-bg fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(37,99,235,0.15),transparent_35%)]" />

      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Education />
        <Certifications />
        <CertificateGallery />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
