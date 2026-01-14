import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Menu } from 'lucide-react'; 
import { Button } from '@/components/ui/button'; 

import StudentDashboard from './pages/StudentDashboard';
import StudyPlanner from './pages/StudyPlanner';
import SmartQuiz from './pages/SmartQuiz';
import ConceptExplainer from './pages/ConceptExplainer';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      <main className="flex-1 h-full overflow-y-auto w-full flex flex-col">
        <div className="p-4 bg-white border-b flex items-center shadow-sm sticky top-0 z-10">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-slate-100"
          >
            <Menu className="h-6 w-6 text-slate-700" />
          </Button>
          <span className="ml-4 font-semibold text-slate-700">Student Portal</span>
        </div>
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Login is now the default "/" */}
        <Route path="/" element={<Login />} />
        
        {/* Private Routes: Dashboard moved to "/dashboard" */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/planner" element={<StudyPlanner />} />
          <Route path="/quiz" element={<SmartQuiz />} />
          <Route path="/learn" element={<ConceptExplainer />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
