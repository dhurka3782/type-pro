import { motion } from "framer-motion";
import { BearAvatar } from "./BearAvatar";
import type { InteractionState } from "../App";

interface VisualPanelProps {
  isLogin: boolean;
  interactionState: InteractionState;
}

export function VisualPanel({ isLogin, interactionState }: VisualPanelProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-zinc-900 text-white">
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        {/* Keep the cosmic glow, but make it subtler around the bear */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* --- Center Content (The Bear) --- */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center z-10">
        {/* 
           Animate the transition between Bubu and Dudu 
           Use key={isLogin} to force a re-render/animation when swapping
        */}
        <motion.div
          key={isLogin ? "bubu" : "dudu"}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative"
        >
          {/* Glowing Aura behind the bear */}
          <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-110" />

          <BearAvatar
            type={isLogin ? "bubu" : "dudu"}
            state={interactionState}
          />

          {/* Shadow below bear */}
          <div className="absolute -bottom-4 left-1/2 h-8 w-40 -translate-x-1/2 rounded-[100%] bg-charcoal/40 blur-lg" />
        </motion.div>
        {/* <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-white/5 bg-white/5 backdrop-blur-3xl" 
        /> */}
      </div>

      {/* --- Text Content (Top and Bottom) --- */}
      <div className="relative z-20 flex h-full flex-col justify-between p-12 pointer-events-none">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian border border-white/10 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 group-hover:opacity-30 transition-opacity" />

            <svg viewBox="0 0 24 24" className="relative h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
              {/* The Back of the D (Bracket style) */}
              <path d="M7 4v16" stroke="url(#logoGradient)" />
              {/* The Curve of the D (Open loop) */}
              <path d="M10 4h3c4 0 7 3 7 8s-3 8-7 8h-3" stroke="white" />
              {/* The Slash integrated */}
              <path d="M14 8l2 -2" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">D/REACT</span>
        </div>

        {/* Dynamic Quote based on bear */}
        <div className="max-w-md">
          <blockquote className="text-2xl font-medium leading-tight text-zinc-100">
            {isLogin
              ? "\"Welcome back — let’s build something remarkable.\""
              : "\"A fresh start. Let’s create something unforgettable together.\""}
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold text-white">
              {isLogin ? "Bubu" : "Dudu"}
            </p>
            <p className="text-sm text-zinc-500">D-Bot</p>
          </div>
        </div>
      </div>
    </div>
  );
}