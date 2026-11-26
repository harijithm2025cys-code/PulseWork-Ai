import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FormField, { fieldClass } from "@/components/FormField";

// Change these names to your real employees
const employees = ["Hari", "Priya", "Arjun", "Meena"];

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

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-100 via-white to-teal-100 p-6">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create New Task</CardTitle>
          <CardDescription>Fill in the details and assign it to a teammate.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">

            <FormField label="Task title" htmlFor="title" error={errors.title?.message}>
              <Input id="title" placeholder="e.g. Design the dashboard" {...register("title")} />
            </FormField>

            <FormField label="Description" htmlFor="description" error={errors.description?.message}>
              <textarea id="description" rows={3} placeholder="What needs to be done?"
                className={fieldClass} {...register("description")} />
            </FormField>

            <FormField label="Assigned employee" htmlFor="assignedTo" error={errors.assignedTo?.message}>
              <select id="assignedTo" className={fieldClass} {...register("assignedTo")}>
                <option value="">Select an employee</option>
                {employees.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              <FormField label="Priority" htmlFor="priority" error={errors.priority?.message}>
                <select id="priority" className={fieldClass} {...register("priority")}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </FormField>

              <FormField label="Due date" htmlFor="dueDate" error={errors.dueDate?.message}>
                <Input id="dueDate" type="date" {...register("dueDate")} />
              </FormField>
            </div>

            <Button type="submit" className="w-full">Create Task</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default TaskForm;