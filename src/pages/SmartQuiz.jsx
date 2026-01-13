import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function SmartQuiz() {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const question = {
    id: 1,
    text: "Which law states that for every action, there is an equal and opposite reaction?",
    options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Inertia"],
    correct: "Newton's Third Law"
  };

  const handleNext = () => {
    if (selected === question.correct) setScore(score + 1);
    setFinished(true);
  };

  if (finished) {
    return (
        <div className="p-10 flex justify-center">
            <Card className="w-[400px] text-center">
                <CardHeader>
                    <CardTitle>Quiz Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold mb-4">{score} / 1</div>
                    <p className="text-slate-500">Great job! The AI has updated your learning path.</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button onClick={() => window.location.reload()}>Take Another Quiz</Button>
                </CardFooter>
            </Card>
        </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
            <span>Question {step} of 5</span>
            <span>Physics</span>
        </div>
        <Progress value={(step / 5) * 100} />
      </div>

      <Card>
        <CardHeader>
            <CardTitle className="text-xl">{question.text}</CardTitle>
        </CardHeader>
        <CardContent>
            <RadioGroup onValueChange={setSelected} className="space-y-4">
                {question.options.map((opt) => (
                    <div key={opt} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-slate-50">
                        <RadioGroupItem value={opt} id={opt} />
                        <Label htmlFor={opt} className="flex-1 cursor-pointer">{opt}</Label>
                    </div>
                ))}
            </RadioGroup>
        </CardContent>
        <CardFooter className="justify-end">
            <Button onClick={handleNext} disabled={!selected}>Next Question</Button>
        </CardFooter>
      </Card>
    </div>
  );
}