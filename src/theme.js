// One place for the black theme. Change a colour here and every page updates.
export const heading = "font-['Sora']";

// Button variants:  className={`${btn.base} ${btn.primary}`}
export const btn = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-500/40",
  primary: "bg-violet-600 text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500",
  outline: "border border-white/20 text-zinc-100 hover:bg-white/10",
  ghost: "text-zinc-400 hover:bg-white/5 hover:text-white",
};

// Card look
export const card = "rounded-3xl border border-white/10 bg-zinc-900/70 backdrop-blur";

// Look for <select>, <textarea> and date inputs
export const fieldClass =
  "w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20 [color-scheme:dark] [&>option]:bg-zinc-900";
