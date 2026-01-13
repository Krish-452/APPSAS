import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar'; // Note the curly braces based on our last fix

// Import Pages
import StudentDashboard from './pages/StudentDashboard';
import StudyPlanner from './pages/StudyPlanner';
import SmartQuiz from './pages/SmartQuiz';
import ConceptExplainer from './pages/ConceptExplainer';
import Login from './pages/Login';

// Layout Component (Keeps the Sidebar on the left, changes content on the right)
const AppLayout = () => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet /> {/* This is where the pages (Dashboard, Planner, etc.) will appear */}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Login (No Sidebar) */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes: The App (With Sidebar) */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/planner" element={<StudyPlanner />} />
          <Route path="/quiz" element={<SmartQuiz />} />
          <Route path="/learn" element={<ConceptExplainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;