import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, BookOpen, BrainCircuit, LogOut, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// ✅ CORRECTED: Removed "default" so it matches the import in App.jsx
export function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Study Planner", icon: <Calendar size={20} />, path: "/planner" },
    { name: "Smart Quiz", icon: <BookOpen size={20} />, path: "/quiz" },
    { name: "Concept Explainer", icon: <BrainCircuit size={20} />, path: "/learn" },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col p-4 shadow-xl">
      <div className="flex items-center gap-2 mb-8 px-2">
        <GraduationCap className="h-8 w-8 text-blue-400" />
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
              className={`w-full justify-start gap-3 ${
                location.pathname === item.path 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {item.icon}
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>

      <Separator className="bg-slate-700 my-4" />

      <div className="mt-auto px-2">
        <Button variant="destructive" className="w-full gap-2">
          <LogOut size={16} /> Logout
        </Button>
      </div>
    </div>
  );
}