import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Loader2, Github, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AuthFormProps {
  isLogin: boolean;
  onToggleMode: () => void;
}

export function AuthForm({ isLogin, onToggleMode }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(isLogin ? "Logged In!" : "Account Created!");
    }, 2000);
  };

  return (
    <div className="w-full max-w-[420px] px-6">
      <div className="mb-8 flex flex-col items-center lg:items-start">
        <motion.div
           key={isLogin ? "login-h" : "signup-h"}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center lg:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {isLogin ? "Welcome back" : "Create an account"}
          </h1>
          <p className="mt-2 text-zinc-400">
            {isLogin ? "Enter your details to access the cosmos." : "Join us to explore the galaxy."}
          </p>
        </motion.div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AnimatePresence mode="popLayout">
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-300 ml-1">Full Name</label>
                <Input placeholder="John Doe" required={!isLogin} className="bg-zinc-900/50" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-300 ml-1">Email Address</label>
          <Input type="email" placeholder="voyager@cosmos.io" required className="bg-zinc-900/50" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-zinc-300 ml-1">Password</label>
            {isLogin && <a href="#" className="text-xs text-primary hover:text-accent">Forgot?</a>}
          </div>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="bg-zinc-900/50 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button className="w-full h-12 mt-4" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : (isLogin ? "Sign In" : "Sign Up")} 
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-obsidian px-2 text-zinc-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Github className="mr-2 h-4 w-4" /> Github
          </button>
          <button className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white transition-all hover:bg-white/10">
            <Twitter className="mr-2 h-4 w-4 text-blue-400" /> Twitter
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={onToggleMode}
            className="font-medium text-primary hover:text-accent transition-colors hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}