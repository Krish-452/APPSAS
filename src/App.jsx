import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Menu } from 'lucide-react'; // Import Menu Icon
import { Button } from '@/components/ui/button'; // Import Button

import StudentDashboard from './pages/StudentDashboard';
import StudyPlanner from './pages/StudyPlanner';
import SmartQuiz from './pages/SmartQuiz';
import ConceptExplainer from './pages/ConceptExplainer';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const AppLayout = () => {
  // State to control Sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar with dynamic prop */}
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-y-auto w-full flex flex-col">
        
        {/* Top Bar for Toggle Button */}
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

        {/* Page Content */}
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
        <Route path="/login" element={<Login />} />
        
        <Route element={<AppLayout />}>
          <Route path="/" element={<StudentDashboard />} />
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
