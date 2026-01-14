import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Calendar, BookOpen, BrainCircuit, LogOut, GraduationCap, ShieldCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Sidebar({ isOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user is currently on an admin page
  const isAdmin = location.pathname.startsWith("/admin");

  // Define menus for both roles
  const studentItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { name: "Study Planner", icon: <Calendar size={20} />, path: "/planner" },
    { name: "Smart Quiz", icon: <BookOpen size={20} />, path: "/quiz" },
    { name: "Concept Explainer", icon: <BrainCircuit size={20} />, path: "/learn" },
  ];

  const adminItems = [
    { name: "Admin Portal", icon: <ShieldCheck size={20} />, path: "/admin" },
    // You can add more admin specific pages here if you create them
    // { name: "Manage Students", icon: <Users size={20} />, path: "/admin/students" },
  ];

  const navItems = isAdmin ? adminItems : studentItems;

  const handleLogout = () => {
    navigate("/");
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
          {isAdmin ? (
             <ShieldCheck className="h-8 w-8 text-red-500 shrink-0" />
          ) : (
             <GraduationCap className="h-8 w-8 text-blue-400 shrink-0" />
          )}
          
          <div>
            <h1 className="text-xl font-bold tracking-wider">APPSAS</h1>
            <p className="text-xs text-slate-400">
                {isAdmin ? "Admin Administrator" : "AI Study Assistant"}
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link to={item.path} key={item.path}>
              <Button
                variant={location.pathname === item.path ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 mb-1 ${
                  location.pathname === item.path 
                    ? (isAdmin ? "bg-red-600 text-white hover:bg-red-700" : "bg-blue-600 text-white hover:bg-blue-700")
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
