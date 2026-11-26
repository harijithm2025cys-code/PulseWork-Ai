import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormField from "@/components/FormField";

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
  // Compare the two passwords and show the error under "confirm"
  .refine((d) => d.password === d.confirm, {
    error: "Passwords don't match",
    path: ["confirm"],
  });

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-teal-100 p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>It takes under a minute.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
            <FormField label="Full name" htmlFor="name" error={errors.name?.message}>
              <Input id="name" placeholder="Your name" {...register("name")} />
            </FormField>

            <FormField label="Email" htmlFor="email" error={errors.email?.message}>
              <Input id="email" type="email" placeholder="you@college.edu" {...register("email")} />
            </FormField>

            <FormField label="Password" htmlFor="password" error={errors.password?.message}>
              <Input id="password" type="password" placeholder="8+ characters, 1 capital, 1 number" {...register("password")} />
            </FormField>

            <FormField label="Confirm password" htmlFor="confirm" error={errors.confirm?.message}>
              <Input id="confirm" type="password" placeholder="Type it once more" {...register("confirm")} />
            </FormField>

            <Button type="submit" className="w-full">Create account</Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center pb-8">
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link to="/" className="ml-1 font-semibold text-violet-600 hover:underline">Sign in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;