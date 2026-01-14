import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StudyPlanner from "./pages/StudyPlanner";
import SmartQuiz from "./pages/SmartQuiz";
import ConceptExplainer from "./pages/ConceptExplainer";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page (No Sidebar/Layout) */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes (Wrapped in Layout) */}
        <Route element={<Layout />}>
          {/* Student Routes */}
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/planner" element={<StudyPlanner />} />
          <Route path="/quiz" element={<SmartQuiz />} />
          <Route path="/learn" element={<ConceptExplainer />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
