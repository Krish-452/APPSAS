import { useNavigate } from "react-router-dom"; // Import the navigation hook
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, BookOpen, AlertCircle } from "lucide-react";

export default function StudentDashboard() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-sm border">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-2">
            Welcome back! Here is your AI study breakdown for today.
          </p>
        </div>
        
        {/* ADDED: onClick handler to navigate to Concept Explainer */}
        <Button 
          className="bg-black hover:bg-slate-800 text-white"
          onClick={() => navigate("/learn")} 
        >
          Start AI Study Session
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Weekly Goal Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Weekly Goal</CardTitle>
            <Target className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">12/15 Hrs</div>
            <Progress value={80} className="h-2 mb-2" />
            <p className="text-xs text-slate-500">80% completed</p>
          </CardContent>
        </Card>

        {/* Quiz Accuracy Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Quiz Accuracy</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-2">88%</div>
            <p className="text-xs text-green-600 font-medium">+4% from last week</p>
          </CardContent>
        </Card>

        {/* Weak Area Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Weak Area</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 mb-2">Calculus</div>
            <Button 
                variant="link" 
                className="p-0 h-auto text-xs text-slate-900 underline"
                onClick={() => navigate("/planner")} // Link this to planner as well if you like
            >
              View Practice Plan →
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-slate-500">
            No recent study sessions recorded today.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
