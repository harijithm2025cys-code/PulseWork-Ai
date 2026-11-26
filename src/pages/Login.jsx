import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormField from "@/components/FormField";

// 1. Rules (the schema)
const schema = z.object({
  email: z.email({ error: "Enter a valid email address" }),
  password: z.string().min(6, { error: "Password must be at least 6 characters" }),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // 2. Connect the rules to the form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  // 3. Runs only when everything is valid
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-teal-100 p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-violet-400 to-teal-400" />
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Sign in to continue to PulseWork AI.</CardDescription>
        </CardHeader>

        <CardContent>
          {/* noValidate stops the browser's own email popup so Zod's messages show instead */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">

            <FormField label="Email" htmlFor="email" error={errors.email?.message}>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input id="email" type="email" placeholder="you@college.edu" className="pl-10" {...register("email")} />
              </div>
            </FormField>

            <FormField label="Password" htmlFor="password" error={errors.password?.message}>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="Your password"
                  className="pl-10 pr-10" {...register("password")} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </FormField>

            <Button type="submit" className="w-full">Sign in</Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center pb-8">
          <p className="text-sm text-gray-500">
            Don't have an account?
            <Link to="/register" className="ml-1 font-semibold text-violet-600 hover:underline">Create account</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;