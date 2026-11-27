import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, UsersRound, CalendarCheck, CheckCircle2, Clock, ArrowRight, Quote } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { images } from "@/data/images";
import { btn, card, heading } from "@/theme";

// ---------- Page content (edit text here) ----------
const features = [
  { icon: Sparkles, title: "Smart Task Creation", text: "Paste a class syllabus or meeting note and watch PulseWork AI organize it into clear, bite-sized tasks." },
  { icon: UsersRound, title: "Assign to Your Team", text: "Share ownership in one click so every group member knows what they own and when it is ready for review." },
  { icon: CalendarCheck, title: "Priority & Deadline Tracking", text: "Gentle reminders and smart priority sorting surface what matters today without overwhelming your week." },
];
const steps = [
  { title: "Sign up", img: images.step1, text: "Create a free workspace with your student or team email and invite collaborators in seconds." },
  { title: "Create a task", img: images.step2, text: "Type a goal or drop in your notes. PulseWork AI suggests subtasks, owners, and realistic due dates." },
  { title: "Track progress", img: images.step3, text: "Watch your team's progress bar fill up calmly with zero last-minute scrambles before submission." },
];
const reviews = [
  { name: "Maya Lin", role: "Biology Junior, UC Davis", img: images.maya, text: "Midterms used to feel like a wall of sticky notes. PulseWork turned my five syllabi into one calm weekly checklist." },
  { name: "Jordan Brooks", role: "Product Design Lead, StudioLoop", img: images.jordan, text: "Our four-person capstone team finally stopped double-asking who owns what. Everyone checks one board and moves forward." },
  { name: "Priya Nair", role: "CS Grad Researcher", img: images.priya, text: "It feels quiet and intentional. No cluttered menus, just the three tasks I need to finish before dinner." },
];

const Title = ({ children }) => <h2 className={`text-3xl font-bold text-white sm:text-4xl ${heading}`}>{children}</h2>;

// A floating card that gently bobs up and down
const Floating = ({ children, className, delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur ${className}`}
  >
    {children}
  </motion.div>
);

function Landing() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#09090b] text-zinc-100">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#reviews" className="hover:text-white">Testimonials</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login" className={`${btn.base} ${btn.outline} !px-5 !py-2`}>Login</Link>
            <Link to="/register" className={`${btn.base} ${btn.primary} !px-5 !py-2`}>Get Started</Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/30 via-teal-400/20 to-transparent blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className={`text-4xl font-bold leading-tight text-white sm:text-6xl ${heading}`}>Work that fits the way you think.</h1>
            <p className="mt-6 max-w-lg text-lg text-zinc-400">
              AI-assisted task planning that turns messy notes, syllabi, and team ideas into calm, prioritized schedules.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className={`${btn.base} ${btn.primary}`}>Get Started Free <ArrowRight size={16} /></Link>
              <a href="#how" className={`${btn.base} ${btn.outline}`}>See how it works</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <img src={images.hero} alt="PulseWork AI task dashboard" className="w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-violet-900/40" />
            <Floating className="-left-4 top-8 sm:-left-8">
              <CheckCircle2 className="text-teal-400" />
              <div><p className="text-sm font-semibold">Task completed</p><p className="text-xs text-zinc-400">Bio Lab Outline · 10m ago</p></div>
            </Floating>
            <Floating className="-right-2 bottom-8 sm:-right-6" delay={1.5}>
              <Clock className="text-violet-400" />
              <div><p className="text-sm font-semibold">Deadline reminder</p><p className="text-xs text-zinc-400">CS 204 Draft · Thu 5:00 PM</p></div>
            </Floating>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 py-8 text-center">
        <p className="text-sm text-zinc-400">Trusted by <span className="font-bold text-white">500+</span> students and teams</p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-12 gap-y-2 font-semibold text-zinc-600">
          {["Northbridge", "StudioLoop", "CampusLab", "Arcadia Co."].map((n) => <span key={n}>{n}</span>)}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <Reveal className="mb-12 text-center">
          <Title>Designed to quiet the noise</Title>
          <p className="mt-3 text-zinc-400">Three thoughtful tools that keep assignments, teammates, and deadlines in one calm place.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className={`${card} h-full p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-900/30`}>
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400"><Icon /></span>
                <h3 className={`text-lg font-semibold text-white ${heading}`}>{title}</h3>
                <p className="mt-2 text-zinc-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-20 bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <Title>From scattered to sorted in three steps</Title>
            <p className="mt-3 text-zinc-400">No complex setup. Start your first project in under a minute.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className={`${card} overflow-hidden`}>
                  <img src={s.img} alt={s.title} className="aspect-[4/3] w-full object-cover opacity-90" />
                  <div className="p-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400 text-sm font-bold text-black">{i + 1}</span>
                    <h3 className={`mt-4 text-lg font-semibold text-white ${heading}`}>{s.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <Reveal className="mb-12 text-center">
          <Title>Loved by students and small teams</Title>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className={`${card} h-full p-7`}>
                <Quote className="text-violet-400" size={22} />
                <blockquote className="mt-4 text-zinc-300">"{r.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={r.img} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
                  <div><p className="text-sm font-semibold text-white">{r.name}</p><p className="text-xs text-zinc-500">{r.role}</p></div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-6 pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-violet-700 to-teal-600 p-12 text-center">
            <h2 className={`text-3xl font-bold text-white sm:text-4xl ${heading}`}>Ready to feel in control of your work?</h2>
            <p className="mt-3 text-violet-100">Start free with your team or study group. No credit card required.</p>
            <Link to="/register" className={`${btn.base} mt-8 bg-white !text-black hover:bg-zinc-200`}>Create your free account</Link>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <div><Logo /><p className="mt-2">Calm AI task planning for college students and small teams.</p></div>
          <div className="flex gap-6"><a href="#features" className="hover:text-white">Features</a><a href="#how" className="hover:text-white">How it works</a><a href="#reviews" className="hover:text-white">Testimonials</a></div>
          <p>© 2026 PulseWork AI</p>
        </div>
      </footer>
    </div>
  );
}
export default Landing;
