import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, ShieldCheck } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import FormField from "@/components/FormField";
import IconInput from "@/components/IconInput";
import { btn } from "@/theme";

const schema = z
  .object({
    name: z.string().min(2, { error: "Enter your full name" }),
    email: z.email({ error: "Enter a valid email address" }),
    password: z
      .string()
      .min(8, { error: "Use at least 8 characters" })
      .regex(/[A-Z]/, { error: "Add at least one capital letter" })
      .regex(/[0-9]/, { error: "Add at least one number" }),
    confirm: z.string(),
  })
  // Compare both passwords; show the error under "confirm"
  .refine((d) => d.password === d.confirm, { error: "Passwords don't match", path: ["confirm"] });

// Password strength: 0 to 4
const strength = (p = "") =>
  [p.length >= 8, /[A-Z]/.test(p), /[0-9]/.test(p), /[^A-Za-z0-9]/.test(p)].filter(Boolean).length;
const barColors = ["bg-red-500", "bg-amber-500", "bg-lime-400", "bg-teal-400"];

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const score = strength(watch("password"));

  const onSubmit = (data) => console.log(JSON.stringify(data, null, 2));

  return (
    <AuthLayout
      title="Create your account"
      subtitle="It takes under a minute."
      footer={
        <>Already have an account?
          <Link to="/login" className="ml-1 font-semibold text-violet-400 hover:underline">Sign in</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-1">
        <FormField label="Full name" htmlFor="name" error={errors.name?.message}>
          <IconInput id="name" icon={User} placeholder="Your name" error={!!errors.name} {...register("name")} />
        </FormField>

        <FormField label="Email address" htmlFor="email" error={errors.email?.message}>
          <IconInput id="email" type="email" icon={Mail} placeholder="you@college.edu"
            error={!!errors.email} {...register("email")} />
        </FormField>

        <FormField label="Password" htmlFor="password" error={errors.password?.message}>
          <IconInput id="password" type="password" icon={Lock} placeholder="8+ characters, 1 capital, 1 number"
            error={!!errors.password} {...register("password")} />
          {/* Strength bar: 4 segments fill as the password gets stronger */}
          <div className="mt-2 flex gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i < score ? barColors[score - 1] : "bg-zinc-800"}`} />
            ))}
          </div>
        </FormField>

        <FormField label="Confirm password" htmlFor="confirm" error={errors.confirm?.message}>
          <IconInput id="confirm" type="password" icon={Lock} placeholder="Type it once more"
            error={!!errors.confirm} {...register("confirm")} />
        </FormField>

        <button type="submit" className={`${btn.base} ${btn.primary} w-full`}>Create account</button>

        <p className="flex items-center justify-center gap-1.5 pt-3 text-xs text-zinc-500">
          <ShieldCheck size={14} className="text-teal-400" /> Your information is protected and secure.
        </p>
      </form>
    </AuthLayout>
  );
}
export default Register;
