import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  // Update one field when the user types
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Check the fields and return friendly error messages
  const validate = () => {
    const found = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = "Enter an email like you@college.edu.";
    if (!form.password) found.password = "Enter your password.";
    return found;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: connect to your backend later, for example:
    // fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form) });
    setMessage("Welcome back! Signing you in...");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-teal-100 p-6">
      <Card className="w-full max-w-md shadow-xl">

        <CardHeader className="text-center">
          {/* Soft pulsing circle: a slow, calming "breathing" effect */}
          <div className="mx-auto mb-3 h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-violet-400 to-teal-400" />
          <CardTitle className="text-2xl">Welcome back</CardTitle>
          <CardDescription>Sign in to continue to PulseWork AI.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input id="email" name="email" type="email" placeholder="you@college.edu"
                  className="pl-10" value={form.email} onChange={handleChange} />
              </div>
              <p className="min-h-5 text-sm text-orange-700">{errors.email}</p>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input id="password" name="password" type={showPassword ? "text" : "password"}
                  placeholder="Your password" className="pl-10 pr-10"
                  value={form.password} onChange={handleChange} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="min-h-5 text-sm text-orange-700">{errors.password}</p>
            </div>

            <Button type="submit" className="w-full">Sign in</Button>
            <p className="min-h-5 text-center font-semibold text-teal-700">{message}</p>
          </form>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs text-gray-400">
            <ShieldCheck size={15} /> Your information is protected and secure.
          </div>
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