import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { LayoutDashboard, Calendar, BookOpen, BrainCircuit, LogOut, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Sidebar({ isOpen }) {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation

  const navItems = [
    // Changed path from "/" to "/dashboard"
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Study Planner", icon: <Calendar size={20} />, path: "/planner" },
    { name: "Smart Quiz", icon: <BookOpen size={20} />, path: "/quiz" },
    { name: "Concept Explainer", icon: <BrainCircuit size={20} />, path: "/learn" },
  ];

  const handleLogout = () => {
    // Perform any logout logic here (clearing tokens, etc.)
    navigate("/"); // Redirect to Login page
  };

  return (
    <div 
      className={`
        h-screen bg-slate-900 text-white flex flex-col shadow-xl transition-all duration-300 ease-in-out
        ${isOpen ? "w-64 p-4 translate-x-0" : "w-0 p-0 -translate-x-full overflow-hidden"}
      `}
    >
      <div className={`flex flex-col h-full ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
        <div className="flex items-center gap-2 mb-8 px-2 whitespace-nowrap">
          <GraduationCap className="h-8 w-8 text-blue-400 shrink-0" />
          <div>
            <h1 className="text-xl font-bold tracking-wider">APPSAS</h1>
            <p className="text-xs text-slate-400">AI Study Assistant</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 mb-1 ${
                  location.pathname === item.path 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>

        <Separator className="bg-slate-700 my-4" />

        <div className="mt-auto px-2">
          {/* Added onClick handler */}
          <Button 
            variant="destructive" 
            className="w-full gap-2 whitespace-nowrap"
            onClick={handleLogout}
          >
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
