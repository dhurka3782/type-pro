import { motion } from "framer-motion";
import { BearAvatar } from "./BearAvatar";
import type { InteractionState } from "../App";

interface VisualPanelProps {
  isLogin: boolean;
  interactionState: InteractionState;
}

export function VisualPanel({ isLogin, interactionState }: VisualPanelProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-obsidian text-white">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Bear centered */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center z-10">
        <div className="relative">

          {/* CENTERED ROTATING BACKGROUND SHAPE */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -right-5 -top-3 h-[310px] w-[310px] 
                 -translate-x-1/2 -translate-y-1/2 
                 rounded-[40%] border border-white/5 bg-white/5 
                 backdrop-blur-3xl"
          />

          {/* Glow behind bear */}
          <div className="absolute inset-0 bg-card/30 blur-3xl rounded-full scale-110" />

          {/* Bear Avatar */}
          <motion.div
            key={isLogin ? "dexo" : "domo"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative"
          >
            <BearAvatar type={isLogin ? "dexo" : "domo"} state={interactionState} />

            {/* Shadow */}
            <div className="absolute -bottom-4 left-1/2 h-8 w-40 -translate-x-1/2 rounded-[100%] bg-charcoal/60 blur-lg" />
          </motion.div>
        </div>
      </div>


      {/* Text + Branding */}
      <div className="relative z-20 flex h-full flex-col justify-between p-12 pointer-events-none">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian border border-border shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 group-hover:opacity-30 transition-opacity" />

            <svg
              viewBox="0 0 24 24"
              className="relative h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              <path d="M7 4v16" stroke="url(#logoGradient)" />
              <path d="M10 4h3c4 0 7 3 7 8s-3 8-7 8h-3" stroke="white" />
              <path d="M14 8l2 -2" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            </svg>
          </div>

          <span className="text-xl font-bold tracking-tight">D/REACT</span>
        </div>

        {/* Quote */}
        <div className="max-w-md">
          <blockquote className="text-2xl font-medium leading-tight text-white/90">
            {isLogin
              ? "\"Welcome back — let’s build something remarkable.\""
              : "\"A fresh start. Let’s create something unforgettable together.\""}
          </blockquote>

          <div className="mt-4">
            <p className="font-semibold text-white">
              {isLogin ? "Dexo" : "Domo"}
            </p>
            <p className="text-sm text-muted">D-Bot Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
