import { Link } from "react-router-dom";
import { heading } from "@/theme";

// Logo with the small pulsing teal dot
function Logo() {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 text-lg font-bold text-white ${heading}`}>
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400" />
      </span>
      PulseWork AI
    </Link>
  );
}
export default Logo;
