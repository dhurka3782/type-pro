import { motion } from "framer-motion";

export function VisualPanel() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-zinc-900 text-white">
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        {/* Glowing Orbs */}
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px]" />
        
        {/* Noise & Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        
        {/* Center Glass Shape */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-white/5 bg-white/5 backdrop-blur-3xl" 
        />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 flex h-full flex-col justify-between p-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent shadow-lg shadow-primary/20">
            <div className="h-4 w-4 rounded-full bg-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">DHURKA</span>
        </div>

        {/* Quote */}
        {/* <div className="max-w-md space-y-6">
          <div className="flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" className="text-primary" />
            ))}
          </div>
          <blockquote className="text-3xl font-medium leading-tight text-zinc-100">
            "Design is intelligence made visible. The dark mode is the future."
          </blockquote>
          <div>
            <p className="font-semibold text-white">Elena Void</p>
            <p className="text-sm text-zinc-500">Director at Nebula UI</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}