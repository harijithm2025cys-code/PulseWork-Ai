import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Logo from "@/components/Logo";
import { card, heading } from "@/theme";

const points = ["Create tasks in seconds", "Assign work to your team", "Track priorities and deadlines"];

// Split screen used by Login and Register
function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="grid min-h-screen bg-[#09090b] text-zinc-100 lg:grid-cols-2">

      {/* LEFT: brand panel (hidden on phones) */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-950 via-black to-teal-950 p-12 lg:flex">
        <Logo />

        {/* Breathing orb: slow pulse feels calming */}
        <motion.div
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-gradient-to-tr from-teal-400/30 via-violet-500/30 to-transparent blur-3xl"
        />

        <div className="relative max-w-md">
          <h1 className={`text-4xl font-bold leading-tight text-white ${heading}`}>Work that fits the way you think.</h1>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-zinc-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Check size={15} className="text-teal-400" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-sm text-zinc-500">Trusted by 500+ students and teams</p>
      </aside>

      {/* RIGHT: form card */}
      <main className="flex flex-col items-center justify-center p-6">
        <div className="mb-6 lg:hidden"><Logo /></div>
        <motion.section
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className={`${card} w-full max-w-md p-8 shadow-2xl shadow-violet-900/20`}
        >
          <h2 className={`text-2xl font-bold text-white ${heading}`}>{title}</h2>
          <p className="mb-6 mt-1 text-zinc-400">{subtitle}</p>
          {children}
          {footer && <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-zinc-400">{footer}</div>}
        </motion.section>
      </main>
    </div>
  );
}
export default AuthLayout;
