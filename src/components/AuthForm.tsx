import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Loader2, Github, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import type { InteractionState } from "../App";

interface AuthFormProps {
  isLogin: boolean;
  onToggleMode: () => void;
  onInteractionChange: (state: InteractionState) => void;
}

export function AuthForm({ isLogin, onToggleMode, onInteractionChange }: AuthFormProps) {
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

  const handleGoogleLogin = () => {
    alert("Redirecting to Google Sign-In...");
    console.log("Google login triggered");
  };

  const handleAppleLogin = () => {
    alert("Redirecting to Apple Sign-In...");
    console.log("Apple login triggered");
  };

  return (
    <div className="w-full max-w-[420px] px-6">
      <div className="mb-8 flex flex-col items-center lg:items-start">
        <motion.div
          key={isLogin ? "login" : "signup"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {isLogin ? "Welcome back" : "Create an account"}
          </h1>
          <p className="mt-2 text-muted">
            {isLogin ? "Enter your details." : "Join the adventure."}
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
                <label className="text-xs font-medium text-muted ml-1">Full Name</label>
                <Input
                  placeholder="Dhurka Manchukan"
                  required={!isLogin}
                  className="bg-graphite"
                  onFocus={() => onInteractionChange("text")}
                  onBlur={() => onInteractionChange("idle")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-2">
          <label className="text-xs font-medium text-muted ml-1">Email Address</label>
          <Input
            type="email"
            placeholder="user@123.com"
            required
            className="bg-graphite"
            onFocus={() => onInteractionChange("text")}
            onBlur={() => onInteractionChange("idle")}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted ml-1">Password</label>
            {isLogin && (
              <a href="#" className="text-xs text-primary hover:text-accent">
                Forgot?
              </a>
            )}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              className="bg-graphite pr-10"
              onFocus={() => onInteractionChange("password")}
              onBlur={() => onInteractionChange("idle")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button className="w-full h-12 mt-4" disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin" /> : isLogin ? "Sign In" : "Sign Up"}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>

      {/* --- SOCIAL LOGIN SECTION --- */}
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-obsidian px-2 text-muted">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4 items-center justify-between">

          {/* GOOGLE BUTTON */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex px-3 h-11 items-center justify-center rounded-xl border border-border bg-card/40 hover:bg-card/60 text-sm font-medium text-white transition-all hover:border-white/20 active:scale-95"
          >
            {/* Custom Google SVG for multi-color support */}
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>

          {/* APPLE BUTTON */}
          <button
            type="button"
            onClick={handleAppleLogin}
            className="flex h-11 px-3 items-center justify-center rounded-xl border border-border bg-card/40 hover:bg-card/60 text-sm font-medium text-white transition-all hover:border-white/20 active:scale-95"
          >
            {/* Custom Filled Apple SVG */}
            <svg className="mr-2 h-4 w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.02 3.67-1.06 1.6-.05 3.19.74 3.89 1.81-3.49 1.85-2.9 6.55.5 7.97-.65 1.58-1.57 3.08-3.14 3.51zM12.03 5.39c-.16-2.58 2.04-4.38 4.21-4.39.38 2.65-2.3 4.67-4.21 4.39z" />
            </svg>
            Apple
          </button>
          <button className="flex h-11 px-3 items-center justify-center rounded-xl border border-border bg-card/40 hover:bg-card/60 text-sm font-medium text-white transition-all">
            <Github className="mr-2 h-4 w-4" /> Github
          </button>
          {/* <button className="flex h-11 items-center justify-center rounded-xl border border-border bg-card/40 hover:bg-card/60 text-sm font-medium text-white transition-all">
            <Twitter className="mr-2 h-4 w-4 text-secondary" /> Twitter
          </button> */}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
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