import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudyPlanner() {
  const [date, setDate] = useState(new Date());

  const tasks = [
    { title: "Complete Calculus Module", time: "10:00 AM", type: "Math", priority: "High" },
    { title: "Read Physics Chapter 4", time: "2:00 PM", type: "Physics", priority: "Medium" },
    { title: "Review Chemistry Notes", time: "4:30 PM", type: "Chemistry", priority: "Low" },
  ];

  return (
    <div className="p-8 grid md:grid-cols-2 gap-8">
      {/* Calendar Section */}
      <Card>
        <CardHeader>
            <CardTitle>Select a Date</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        </CardContent>
      </Card>

      {/* Tasks List */}
      <Card>
        <CardHeader>
            <CardTitle>Schedule for {date ? date.toDateString() : "Today"}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                {tasks.map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                        <div>
                            <p className="font-medium">{task.title}</p>
                            <div className="flex gap-2 text-xs text-slate-500 mt-1">
                                <span>{task.time}</span>
                                <span>•</span>
                                <span>{task.type}</span>
                            </div>
                        </div>
                        <Badge variant={task.priority === "High" ? "destructive" : "secondary"}>
                            {task.priority}
                        </Badge>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}