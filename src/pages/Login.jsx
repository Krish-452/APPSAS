import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { GraduationCap, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Basic validation
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }

      // Admin Check
      if (email === "Admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <Card className="w-[400px] shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            {isLogin ? "Welcome Back" : "Create Account"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Enter your credentials to access APPSAS." : "Join APPSAS to boost your studies."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            
            <div className="grid w-full items-center gap-4">
              {!isLogin && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
              )}
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email / ID</Label>
                <Input id="email" placeholder="student@university.edu" required />
              </div>

              <div className="flex flex-col space-y-1.5 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        required 
                        minLength={8} // Enforce 8 chars
                    />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                    * Must be at least 8 characters long.
                </p>
              </div>

            </div>
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" disabled={loading}>
              {loading ? "Processing..." : (isLogin ? "Login" : "Sign Up")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm text-slate-500 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="ml-1 text-blue-600 underline font-medium"
            >
                {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
