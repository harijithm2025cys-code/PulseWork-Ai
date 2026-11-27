import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import AuthLayout from "@/components/AuthLayout";
import FormField from "@/components/FormField";
import IconInput from "@/components/IconInput";
import { btn } from "@/theme";

// 1. Rules
const schema = z.object({
  email: z.email({ error: "Enter a valid email address" }),
  password: z.string().min(6, { error: "Password must be at least 6 characters" }),
});

function Login() {
  // 2. Connect rules to the form
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  // 3. Runs only when all data is valid
  const onSubmit = (data) => console.log(JSON.stringify(data, null, 2));

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to PulseWork AI."
      footer={
        <>Don't have an account?
          <Link to="/register" className="ml-1 font-semibold text-violet-400 hover:underline">Create account</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-1">
        <FormField label="Email address" htmlFor="email" error={errors.email?.message}>
          <IconInput id="email" type="email" icon={Mail} placeholder="you@college.edu"
            error={!!errors.email} {...register("email")} />
        </FormField>

        <FormField label="Password" htmlFor="password" error={errors.password?.message}>
          <IconInput id="password" type="password" icon={Lock} placeholder="Enter your password"
            error={!!errors.password} {...register("password")} />
        </FormField>

        <button type="submit" className={`${btn.base} ${btn.primary} w-full`}>Sign in</button>

        <p className="flex items-center justify-center gap-1.5 pt-3 text-xs text-zinc-500">
          <ShieldCheck size={14} className="text-teal-400" /> Your information is protected and secure.
        </p>
      </form>
    </AuthLayout>
  );
}
export default Login;
