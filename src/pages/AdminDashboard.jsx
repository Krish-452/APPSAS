import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, BookOpen, Activity, AlertCircle, Save, X } from "lucide-react";

export default function AdminDashboard() {
  
  // 1. Convert Data to State so it can be changed
  const [students, setStudents] = useState([
    { id: "ST-001", name: "Satvik Patel", email: "satvik@uni.edu", status: "Active", progress: "85%" },
    { id: "ST-002", name: "Krish Poddar", email: "krish@uni.edu", status: "Active", progress: "92%" },
    { id: "ST-003", name: "Neev Patel", email: "neev@uni.edu", status: "Inactive", progress: "12%" },
  ]);

  // 2. State to track which student is being edited
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Function to start editing
  const handleEditClick = (student) => {
    setEditingId(student.id);
    setEditForm(student); // Copy student data to form
  };

  // Function to save changes
  const handleSave = () => {
    setStudents(students.map((s) => (s.id === editingId ? editForm : s)));
    setEditingId(null); // Exit edit mode
  };

  // Function to cancel editing
  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Portal</h1>
          <p className="text-slate-500">Manage students, content, and system health.</p>
        </div>
        
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Students</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-slate-900">1,204</div></CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Quizzes</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-slate-900">45</div></CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Server Status</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-green-600">Online</div></CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Flagged Issues</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-red-600">3</div></CardContent>
        </Card>
      </div>

      {/* EDIT FORM: Only visible when editingId is not null */}
      {editingId && (
        <Card className="border-2 border-blue-500 shadow-xl bg-blue-50">
            <CardHeader>
                <CardTitle>Editing Student: {editForm.id}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input 
                            value={editForm.name} 
                            onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input 
                            value={editForm.email} 
                            onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Status</Label>
                        <select 
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            value={editForm.status}
                            onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <Label>Progress</Label>
                        <Input 
                            value={editForm.progress} 
                            onChange={(e) => setEditForm({...editForm, progress: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex gap-2 mt-4 justify-end">
                    <Button variant="outline" onClick={handleCancel} className="gap-2">
                        <X size={16}/> Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 gap-2">
                        <Save size={16}/> Save Changes
                    </Button>
                </div>
            </CardContent>
        </Card>
      )}

      {/* Student Database Table */}
      <Card className="shadow-md border bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-slate-800">Student Database</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className={editingId === student.id ? "bg-blue-50" : ""}>
                    <TableCell className="font-medium text-slate-900">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell className="text-slate-500">{student.email}</TableCell>
                    <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            student.status === "Active" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-red-100 text-red-700"
                        }`}>
                            {student.status}
                        </span>
                    </TableCell>
                    <TableCell>{student.progress}</TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                        onClick={() => handleEditClick(student)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
    </div>
  );
}
