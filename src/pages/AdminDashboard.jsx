import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, BookOpen, Activity, AlertTriangle } from "lucide-react";

export default function AdminDashboard() {
  // Mock Data for Students
  const students = [
    { id: "ST-001", name: "Satvik Patel", email: "satvik@uni.edu", status: "Active", progress: "85%" },
    { id: "ST-002", name: "Krish Poddar", email: "krish@uni.edu", status: "Active", progress: "92%" },
    { id: "ST-003", name: "Neev Patel", email: "neev@uni.edu", status: "Inactive", progress: "12%" },
  ];

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Admin Portal</h2>
          <p className="text-slate-500">Manage students, content, and system health.</p>
        </div>
        <Button variant="destructive">System Maintenance</Button>
      </div>

      {/* Admin Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold">1,204</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Quizzes</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold">45</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Server Status</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-green-600">Online</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Flagged Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold text-red-600">3</div></CardContent>
        </Card>
      </div>

      {/* Student Management Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Database</CardTitle>
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
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>{student.progress}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Edit</Button>
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
