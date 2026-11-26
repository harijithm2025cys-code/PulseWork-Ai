import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tasks" element={<TaskForm />} />
    </Routes>
  );
}

export default App;