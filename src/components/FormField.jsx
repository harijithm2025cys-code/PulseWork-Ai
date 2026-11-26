import { Label } from "@/components/ui/label";

// Same look as shadcn Input, for <select> and <textarea>
export const fieldClass =
  "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-violet-400";

function FormField({ label, htmlFor, error, children }) {
  return (
    <div className="space-y-1">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      <p className="min-h-5 text-sm text-orange-700">{error}</p>
    </div>
  );
}

export default FormField;