import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar as CalendarIcon, Plus, Trash2, Users } from "lucide-react";

export default function AdminDashboard() {
  // State to simulate a database (Addressing Neev's concern about logic)
  const [examDate, setExamDate] = useState("");
  const [examSubject, setExamSubject] = useState("");
  
  const [schedule, setSchedule] = useState([
    { id: 1, subject: "Mathematics Finals", date: "2026-03-15", status: "Scheduled" },
    { id: 2, subject: "Physics Mid-Term", date: "2026-02-10", status: "Pending" },
  ]);

  const handleAddSchedule = () => {
    if (!examDate || !examSubject) return; // Prevent empty adds
    
    const newExam = {
      id: Date.now(),
      subject: examSubject,
      date: examDate,
      status: "Scheduled"
    };
    
    setSchedule([...schedule, newExam]);
    setExamSubject("");
    setExamDate("");
  };

  const handleDelete = (id) => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Portal</h1>
          <p className="text-slate-500">Manage student schedules and content.</p>
        </div>
        <div className="bg-white p-2 px-4 rounded-full border shadow-sm flex items-center gap-2 text-sm font-semibold text-slate-700">
           <Users size={16} /> Admin Mode
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: Add Date/Schedule Form */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Add Exam Schedule</CardTitle>
            <CardDescription>Assign new deadlines to students.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Subject Name</Label>
              <Input 
                placeholder="e.g. Chemistry Lab" 
                value={examSubject}
                onChange={(e) => setExamSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Exam Date</Label>
              <div className="flex items-center gap-2">
                <CalendarIcon className="text-slate-400" size={20}/>
                <Input 
                  type="date" 
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                />
              </div>
            </div>
            <Button onClick={handleAddSchedule} className="w-full bg-slate-900 hover:bg-slate-800">
              <Plus size={16} className="mr-2" /> Add to Calendar
            </Button>
          </CardContent>
        </Card>

        {/* RIGHT COLUMN: The List (Simulating Database) */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Upcoming Examinations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.subject}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
