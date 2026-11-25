import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Update one field when the user types
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Check every field and return a list of friendly error messages
  const validate = () => {
    const found = {};
    if (form.name.trim().length < 2) found.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = "Enter an email like you@college.edu.";
    if (form.password.length < 8) found.password = "Use at least 8 characters.";
    if (form.confirm !== form.password) found.confirm = "Passwords don't match yet.";
    return found;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: send to your backend later, for example:
    // fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name: form.name, email: form.email, password: form.password }) });
    setMessage("Account created! You can sign in now.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 to-teal-50 p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>It takes under a minute.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {[
              { name: "name", label: "Full name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@college.edu" },
              { name: "password", label: "Password", type: "password", placeholder: "At least 8 characters" },
              { name: "confirm", label: "Confirm password", type: "password", placeholder: "Type it once more" },
            ].map((field) => (
              <div key={field.name} className="space-y-1">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input id={field.name} name={field.name} type={field.type}
                  placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} />
                <p className="min-h-5 text-sm text-orange-700">{errors[field.name]}</p>
              </div>
            ))}

            <Button type="submit" className="w-full">Create account</Button>
            <p className="min-h-5 text-center font-semibold text-teal-700">{message}</p>
          </form>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs text-gray-400">
            <ShieldCheck size={15} /> Your information is protected and secure.
          </div>
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