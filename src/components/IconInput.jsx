import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Input with a left icon. type="password" automatically gets a show/hide eye.
const IconInput = forwardRef(function IconInput({ icon: Icon, type = "text", error, ...props }, ref) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      {Icon && <Icon size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />}
      <input
        ref={ref}
        type={isPassword && show ? "text" : type}
        className={`w-full rounded-xl border bg-zinc-950 py-3 pl-11 pr-11 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:ring-4 ${
          error ? "border-orange-500 focus:ring-orange-500/20" : "border-white/10 focus:border-violet-500 focus:ring-violet-500/20"
        }`}
        {...props}
      />
      {isPassword && (
        <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200">
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
});
export default IconInput;
