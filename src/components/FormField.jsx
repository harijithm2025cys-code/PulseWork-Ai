// Label + input + error message. Used by all forms.
function FormField({ label, htmlFor, error, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-zinc-300">{label}</label>
      {children}
      <p className="min-h-5 text-sm text-orange-400">{error}</p>
    </div>
  );
}
export default FormField;
