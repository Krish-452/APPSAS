import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  
  // Check if we are in Admin Mode
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
        
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b flex items-center px-4 justify-between shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle Button */}
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5 text-slate-600" />
            </Button>
            
            {/* DYNAMIC TITLE: Updates based on the current page */}
            <h2 className={`font-semibold text-lg ${isAdmin ? "text-red-600" : "text-slate-700"}`}>
              {isAdmin ? "Admin Administration Portal" : "Student Learning Portal"}
            </h2>
          </div>
        </header>

        {/* Page Content (Dashboard, Planner, etc. renders here) */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
