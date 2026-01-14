import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";

export default function SmartQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  // Expanded Questions Array
  const questions = [
    {
      id: 1,
      text: "Which law states that for every action, there is an equal and opposite reaction?",
      options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Inertia"],
      correct: "Newton's Third Law"
    },
    {
      id: 2,
      text: "What is the derivative of x^2?",
      options: ["x", "2x", "x^2", "2"],
      correct: "2x"
    },
    {
      id: 3,
      text: "Which organelle is known as the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"],
      correct: "Mitochondria"
    }
  ];

  const handleNext = () => {
    if (selected === questions[currentQ].correct) {
      setScore(score + 1);
    }
    
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(""); // Reset selection
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
        <div className="p-10 flex justify-center items-center h-full">
            <Card className="w-[400px] text-center shadow-lg border-t-4 border-blue-500">
                <CardHeader>
                    <div className="flex justify-center mb-2">
                        <CheckCircle2 className="h-12 w-12 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-5xl font-bold mb-2 text-slate-800">{score} / {questions.length}</div>
                    <p className="text-slate-500">
                        {score === questions.length ? "Perfect Score! 🌟" : "Good effort! Keep practicing."}
                    </p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button onClick={() => window.location.reload()} className="w-full">Take Another Quiz</Button>
                </CardFooter>
            </Card>
        </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2 font-medium text-slate-600">
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span>General Science</span>
        </div>
        <Progress value={((currentQ + 1) / questions.length) * 100} className="h-2" />
      </div>

      <Card className="shadow-md">
        <CardHeader>
            <CardTitle className="text-xl leading-relaxed">{questions[currentQ].text}</CardTitle>
        </CardHeader>
        <CardContent>
            <RadioGroup onValueChange={setSelected} value={selected} className="space-y-3">
                {questions[currentQ].options.map((opt) => (
                    <div 
                        key={opt} 
                        className={`flex items-center space-x-2 border p-4 rounded-lg transition-colors cursor-pointer ${selected === opt ? 'border-blue-500 bg-blue-50' : 'hover:bg-slate-50'}`}
                        onClick={() => setSelected(opt)}
                    >
                        <RadioGroupItem value={opt} id={opt} />
                        <Label htmlFor={opt} className="flex-1 cursor-pointer font-medium">{opt}</Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
        <CardFooter className="justify-end border-t bg-slate-50 p-4">
            <Button onClick={handleNext} disabled={!selected}>
                {currentQ + 1 === questions.length ? "Finish Quiz" : "Next Question"}
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
