import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Plus, Trash2 } from "lucide-react";

export default function StudyPlanner() {
  // Input States
  const [newSubject, setNewSubject] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newDate, setNewDate] = useState("");

  // Initial Data
  const [tasks, setTasks] = useState([
    { id: 1, subject: "Calculus", topic: "Derivatives", date: "2026-01-15", time: "10:00 AM", completed: true },
    { id: 2, subject: "Physics", topic: "Newton's Laws", date: "2026-01-15", time: "02:00 PM", completed: false },
  ]);

  const addTask = () => {
    if (!newSubject || !newTopic || !newDate) return;

    const newTask = {
        id: Date.now(),
        subject: newSubject,
        topic: newTopic,
        date: newDate,
        time: newTime || "All Day",
        completed: false
    };

    setTasks([...tasks, newTask]);
    // Reset fields
    setNewSubject("");
    setNewTopic("");
    setNewDate("");
    setNewTime("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      
      {/* HEADER */}
      <div>
          <h1 className="text-3xl font-bold text-slate-900">Study Planner</h1>
          <p className="text-slate-500">Manage your schedule and track your learning progress.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT: Add Task Form */}
        <div className="md:col-span-1 space-y-4">
            <Card>
                <CardContent className="p-4 space-y-4">
                    <h3 className="font-semibold text-lg">Add New Task</h3>
                    
                    <div className="space-y-2">
                        <Label>Subject</Label>
                        <Input 
                            placeholder="e.g. History" 
                            value={newSubject} 
                            onChange={(e) => setNewSubject(e.target.value)} 
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Topic / Details</Label>
                        <Input 
                            placeholder="e.g. Chapter 4 Reading" 
                            value={newTopic} 
                            onChange={(e) => setNewTopic(e.target.value)} 
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Date</Label>
                        <Input 
                            type="date" 
                            value={newDate} 
                            onChange={(e) => setNewDate(e.target.value)} 
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Time (Optional)</Label>
                        <Input 
                            type="time" 
                            value={newTime} 
                            onChange={(e) => setNewTime(e.target.value)} 
                        />
                    </div>

                    <Button onClick={addTask} className="w-full bg-blue-600 hover:bg-blue-700">
                        <Plus size={16} className="mr-2"/> Add Task
                    </Button>
                </CardContent>
            </Card>
        </div>

        {/* RIGHT: Task List */}
        <div className="md:col-span-2 space-y-4">
            {tasks.length === 0 && (
                <div className="text-center text-slate-400 py-10">No tasks scheduled. Add one to get started!</div>
            )}

            {tasks.map((task) => (
            <Card key={task.id} className={`transition-all border-l-4 ${task.completed ? "border-l-green-500 bg-slate-50 opacity-70" : "border-l-blue-500 bg-white"}`}>
                <CardContent className="flex items-center p-4">
                
                {/* Checkbox */}
                <button 
                    onClick={() => toggleTask(task.id)}
                    className={`mr-4 p-2 rounded-full transition-colors ${task.completed ? "text-green-600 bg-green-100" : "text-slate-300 hover:text-slate-500 hover:bg-slate-100"}`}
                >
                    <CheckCircle2 size={24} />
                </button>

                {/* Details */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold text-lg ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}>
                        {task.subject}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border">
                            {task.topic}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                            <CalendarIcon size={14} /> {task.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} /> {task.time}
                        </div>
                    </div>
                </div>

                {/* Delete Button */}
                <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-600 hover:bg-red-50">
                    <Trash2 size={16} />
                </Button>

                </CardContent>
            </Card>
            ))}
        </div>

      </div>
    </div>
  );
}
