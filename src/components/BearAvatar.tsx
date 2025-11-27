import { motion } from "framer-motion";

interface BearAvatarProps {
  type: "dexo" | "domo" ; 
  state: "idle" | "text" | "password";
}

export function BearAvatar({ type, state }: BearAvatarProps) {
  const isBubu = type === "dexo";

  // Colors
  const colors = {
    skin: isBubu ? "#ffffff" : "#d4a373",
    stroke: isBubu ? "#e4e4e7" : "#a97142", 
    ears: isBubu ? "#3f3f46" : "#8b5e3c",
    cheeks: "#f472b6",
  };

  // Animation Variants
  const handVariants = {
    idle: { y: 0, x: 0 },
    text: { y: 10, x: 0 }, 
    password: { y: -55, x: 0 }, 
  };

  const faceVariants = {
    idle: { y: 0 },
    text: { y: 2 }, 
    password: { y: 0 },
  };

  // Eye blinking animation
  const eyeBlink = {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: state === "text" ? 0.5 : 3, 
    },
  };

  return (
    <div className="relative h-64 w-64">
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full drop-shadow-2xl"
        initial="idle"
        animate={state}
      >
        {/* --- EARS --- */}
        <circle cx="40" cy="50" r="25" fill={colors.ears} />
        <circle cx="160" cy="50" r="25" fill={colors.ears} />
        <circle cx="40" cy="50" r="12" fill={isBubu ? "#52525b" : "#5c3d26"} opacity="0.6" />
        <circle cx="160" cy="50" r="12" fill={isBubu ? "#52525b" : "#5c3d26"} opacity="0.6" />

        {/* --- HEAD --- */}
        <motion.g variants={faceVariants}>
          <ellipse
            cx="100"
            cy="110"
            rx="80"
            ry="70"
            fill={colors.skin}
            stroke={colors.stroke}
            strokeWidth="3"
          />

          {/* --- CHEEKS --- */}
          <ellipse cx="45" cy="115" rx="12" ry="8" fill={colors.cheeks} opacity="0.6" />
          <ellipse cx="155" cy="115" rx="12" ry="8" fill={colors.cheeks} opacity="0.6" />

          {/* --- EYES --- */}
          {state !== "password" && (
            <g>
              {/* Left Eye */}
              <motion.ellipse
                cx="70"
                cy="95"
                rx="8"
                ry="10"
                fill="#18181b"
                animate={eyeBlink}
              />
              <circle cx="73" cy="92" r="3" fill="white" />

              {/* Right Eye */}
              <motion.ellipse
                cx="130"
                cy="95"
                rx="8"
                ry="10"
                fill="#18181b"
                animate={eyeBlink}
              />
              <circle cx="133" cy="92" r="3" fill="white" />
            </g>
          )}

          {/* --- MOUTH / SNOUT --- */}
          <ellipse cx="100" cy="115" rx="20" ry="14" fill="#fff" opacity={isBubu ? 0 : 0.4} />
          
          {/* Nose */}
          <ellipse cx="100" cy="110" rx="8" ry="5" fill="#18181b" />
          
          {/* Mouth Lines */}
          <path
            d="M 92 120 Q 100 128 108 120"
            fill="transparent"
            stroke="#18181b"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.g>

        {/* --- HANDS (The interactive part) --- */}
        <motion.g
          variants={handVariants}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {/* Left Hand */}
          <ellipse cx="60" cy="160" rx="25" ry="20" fill={colors.skin} stroke={colors.stroke} strokeWidth="3" />
          <ellipse cx="60" cy="160" rx="10" ry="8" fill="white" opacity="0.3" />

          {/* Right Hand */}
          <ellipse cx="140" cy="160" rx="25" ry="20" fill={colors.skin} stroke={colors.stroke} strokeWidth="3" />
          <ellipse cx="140" cy="160" rx="10" ry="8" fill="white" opacity="0.3" />
        </motion.g>
      </motion.svg>
    </div>
  );
}