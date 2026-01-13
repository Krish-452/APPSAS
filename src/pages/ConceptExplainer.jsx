import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User } from "lucide-react";

export default function ConceptExplainer() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I am your AI Tutor. Stuck on a concept? Ask me anything about Physics, Math, or Biology!", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 2. Simulate AI Response (Hardcoded for Hackathon demo)
    setTimeout(() => {
      const aiMsg = { 
        id: Date.now() + 1, 
        text: `That's a great question about "${userMsg.text}"! \n\nHere is a simple explanation: The concept involves breaking down the problem into smaller parts. For example, in Calculus, this would relate to the Chain Rule. \n\nWould you like a quiz on this?`, 
        sender: "ai" 
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1500);
  };

  return (
    <div className="p-6 h-screen flex flex-col">
      <Card className="flex-1 flex flex-col shadow-md">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <Bot className="text-blue-600" /> Concept Explainer AI
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 p-0 overflow-hidden relative">
          <ScrollArea className="h-full p-4 pb-20">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${msg.sender === "user" ? "bg-slate-900 text-white" : "bg-blue-100 text-blue-600"}`}>
                      {msg.sender === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-lg text-sm ${msg.sender === "user" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-800"}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t flex gap-2">
            <Input 
              placeholder="Ask about a concept..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}><Send size={18} /></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}