import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { VisualPanel } from "./components/VisualPanel";
import { AuthForm } from "./components/AuthForm";

export type InteractionState = "idle" | "text" | "password";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [interactionState, setInteractionState] = useState<InteractionState>("idle");

  return (
    <MotionConfig transition={{ type: "spring", stiffness: 120, damping: 20 }}>
      <div
        className={`flex min-h-screen w-full bg-obsidian selection:bg-primary selection:text-white ${
          isLogin ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
        }`}
      >
        <motion.div layout className="hidden h-screen w-full lg:flex lg:w-[55%]">
          <VisualPanel isLogin={isLogin} interactionState={interactionState} />
        </motion.div>

        <motion.div
          layout
          className="flex flex-1 flex-col items-center justify-center p-6 bg-obsidian z-10"
        >
          <AuthForm
            isLogin={isLogin}
            onToggleMode={() => setIsLogin(!isLogin)}
            onInteractionChange={setInteractionState}
          />
        </motion.div>
      </div>
    </MotionConfig>
  );
}

export default App;
