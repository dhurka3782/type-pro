import { motion } from "framer-motion";

export function RobotAvatar() {
  const glitch = {
    x: [0, -2, 2, -1, 1, 0],
    y: [0, 1, -1, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 3,
    },
  };

  const eyeBlink = {
    scaleY: [1, 0.1, 1],
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
  };

  return (
    <div className="relative h-64 w-64">
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.g animate={glitch}>
            {/* Antennas */}
            <line x1="100" y1="50" x2="100" y2="20" stroke="#64748b" strokeWidth="4" />
            <circle cx="100" cy="20" r="6" fill="#ef4444" className="animate-pulse" />

            {/* Head */}
            <rect
            x="50"
            y="50"
            width="100"
            height="90"
            rx="15"
            fill="#1e293b"
            stroke="#475569"
            strokeWidth="3"
            />
            
            {/* Screen Face */}
            <rect
            x="60"
            y="65"
            width="80"
            height="50"
            rx="5"
            fill="#0f172a"
            />

            {/* Eyes (X shape for error) */}
            <g transform="translate(75, 85)">
                <path d="M0 0 L10 10 M10 0 L0 10" stroke="#ef4444" strokeWidth="3" />
            </g>
            <g transform="translate(115, 85)">
                <path d="M0 0 L10 10 M10 0 L0 10" stroke="#ef4444" strokeWidth="3" />
            </g>

            {/* Mouth (Zigzag) */}
            <path
            d="M 75 105 L 85 110 L 95 105 L 105 110 L 115 105"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            />

            {/* Body */}
            <path
            d="M 60 140 L 140 140 L 130 190 L 70 190 Z"
            fill="#334155"
            stroke="#475569"
            strokeWidth="3"
            />
        </motion.g>
      </motion.svg>
    </div>
  );
}