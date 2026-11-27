import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipboardList, CalendarDays } from "lucide-react";
import Logo from "@/components/Logo";
import FormField from "@/components/FormField";
import IconInput from "@/components/IconInput";
import { btn, card, fieldClass, heading } from "@/theme";

// Change these names to your real employees
const employees = ["Hari", "Priya", "Arjun", "Meena"];

// Colour of each priority when selected
const priorityStyle = {
  Low: "peer-checked:border-teal-400 peer-checked:bg-teal-500/20",
  Medium: "peer-checked:border-amber-400 peer-checked:bg-amber-500/20",
  High: "peer-checked:border-red-400 peer-checked:bg-red-500/20",
};

const schema = z.object({
  title: z.string().min(3, { error: "Title must be at least 3 characters" }),
  description: z.string().min(10, { error: "Describe the task in at least 10 characters" }),
  assignedTo: z.string().min(1, { error: "Choose an employee" }),
  priority: z.enum(["Low", "Medium", "High"], { error: "Choose a priority" }),
  dueDate: z
    .string()
    .min(1, { error: "Pick a due date" })
    .refine((v) => new Date(v + "T00:00:00") >= new Date(new Date().setHours(0, 0, 0, 0)), {
      error: "Due date can't be in the past",
    }),
});

function TaskForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { assignedTo: "", priority: "Medium" },
  });

  const onSubmit = (data) => console.log(JSON.stringify(data, null, 2));

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <Logo />
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold">H</span>
      </header>

      <main className="relative mx-auto max-w-2xl px-6 py-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
        <p className="relative mb-4 text-sm text-zinc-500">Dashboard / <span className="text-zinc-300">New task</span></p>

        <motion.section
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className={`${card} relative p-8 shadow-2xl shadow-violet-900/20`}
        >
          <h1 className={`text-2xl font-bold text-white ${heading}`}>Create New Task</h1>
          <p className="mb-6 mt-1 text-zinc-400">Fill in the details and assign it to a teammate.</p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-1">

            <FormField label="Task title" htmlFor="title" error={errors.title?.message}>
              <IconInput id="title" icon={ClipboardList} placeholder="e.g. Design the dashboard"
                error={!!errors.title} {...register("title")} />
            </FormField>

            <FormField label="Description" htmlFor="description" error={errors.description?.message}>
              <textarea id="description" rows={3} placeholder="What needs to be done?"
                className={fieldClass} {...register("description")} />
            </FormField>

            <FormField label="Assigned employee" htmlFor="assignedTo" error={errors.assignedTo?.message}>
              <select id="assignedTo" className={fieldClass} {...register("assignedTo")}>
                <option value="">Select an employee</option>
                {employees.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </FormField>

            <div className="grid gap-x-4 sm:grid-cols-2">
              {/* Priority: 3 radio buttons styled as a segmented selector */}
              <FormField label="Priority" error={errors.priority?.message}>
                <div className="flex gap-2">
                  {Object.keys(priorityStyle).map((p) => (
                    <label key={p} className="flex-1 cursor-pointer">
                      <input type="radio" value={p} className="peer sr-only" {...register("priority")} />
                      <span className={`block rounded-xl border border-white/10 py-3 text-center text-sm text-zinc-400 transition peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-violet-500/40 ${priorityStyle[p]}`}>
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </FormField>

              <FormField label="Due date" htmlFor="dueDate" error={errors.dueDate?.message}>
                <div className="relative">
                  <CalendarDays size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input id="dueDate" type="date" className={fieldClass} {...register("dueDate")} />
                </div>
              </FormField>
            </div>

            <div className="space-y-2 pt-2">
              <button type="submit" className={`${btn.base} ${btn.primary} w-full`}>Create Task</button>
              <Link to="/" className={`${btn.base} ${btn.ghost} w-full`}>Cancel</Link>
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
export default TaskForm;
