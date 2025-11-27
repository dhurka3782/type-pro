import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { VisualPanel } from "./components/VisualPanel";
import { AuthForm } from "./components/AuthForm";

function App() {
  // State to toggle between Login and Signup
  const [isLogin, setIsLogin] = useState(true);

  return (
    // MotionConfig ensures all layout animations share the same spring physics
    <MotionConfig transition={{ type: "spring", stiffness: 120, damping: 20 }}>
      
      {/* 
         Main Container 
         - Uses flex-row for Login (Visual Left, Form Right)
         - Uses flex-row-reverse for Signup (Form Left, Visual Right)
      */}
      <div className={`flex min-h-screen w-full bg-obsidian selection:bg-primary selection:text-white ${isLogin ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'}`}>
        
        {/* --- VISUAL PANEL (The Image Side) --- */}
        <motion.div 
          layout // <--- This magic prop makes it slide when flex order changes
          className="hidden h-screen w-full lg:flex lg:w-[55%]"
        >
          <VisualPanel />
        </motion.div>

        {/* --- FORM PANEL (The Interactive Side) --- */}
        <motion.div 
          layout // <--- This magic prop makes it slide
          className="flex flex-1 flex-col items-center justify-center p-6 bg-obsidian z-10"
        >
          {/* 
             Pass the state and toggle function down. 
             The actual form content also animates internally.
          */}
          <AuthForm 
            isLogin={isLogin} 
            onToggleMode={() => setIsLogin(!isLogin)} 
          />
        </motion.div>

        {/* --- Mobile Only Visual (Optional: if you want image on mobile too) --- */}
        {/* On mobile, we usually hide the big visual panel or stack it. 
            The current setup stacks them via flex-col, but hides Visual on mobile via 'hidden lg:flex'
        */}
      </div>
    </MotionConfig>
  );
}

export default App;