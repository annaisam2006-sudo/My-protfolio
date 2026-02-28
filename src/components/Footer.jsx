import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-semibold text-white">Samuel Milton R</p>
          <p className="text-sm text-slate-400">© 2026 All Rights Reserved</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <button
            type="button"
            className="rounded-full border border-white/15 p-2 text-slate-200 transition-colors hover:border-cyan-300/60 hover:text-cyan-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
