import { useState } from "react";
import Landing from "./pages/Landing";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CoordinatorDashboard from "./pages/CoordinatorDashboard";

export default function App() {
  const [role, setRole] = useState(null);
  if (!role) return <Landing onRole={setRole}/>;
  const onHome = () => setRole(null);
  if (role === "student") return <StudentDashboard onHome={onHome}/>;
  if (role === "recruiter") return <RecruiterDashboard onHome={onHome}/>;
  return <CoordinatorDashboard onHome={onHome}/>;
}
