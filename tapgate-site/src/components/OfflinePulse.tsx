export default function OfflinePulse() {
  return (
    <div
      aria-hidden
      className="relative w-full h-full min-h-[280px] flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute w-40 h-40 rounded-full border border-[var(--color-teal)]/40"
            style={{
              animation: `offlinePulse 3.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 1.2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <svg
          viewBox="0 0 80 80"
          className="w-20 h-20 text-[var(--color-teal)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <path d="M16 36a34 34 0 0148 0" opacity="0.6" />
          <path d="M24 44a22 22 0 0132 0" opacity="0.8" />
          <path d="M32 52a10 10 0 0116 0" />
          <circle cx="40" cy="62" r="2.5" fill="currentColor" stroke="none" />
          <line
            x1="10"
            y1="10"
            x2="70"
            y2="70"
            strokeDasharray="84"
            strokeDashoffset="84"
            style={{ animation: "offlineSlash 3.6s ease-in-out infinite" }}
          />
        </svg>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/60">
          No internet needed
        </span>
      </div>

      <style>{`
        @keyframes offlinePulse {
          0% { transform: scale(0.4); opacity: 0.7; }
          80% { opacity: 0.05; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes offlineSlash {
          0% { stroke-dashoffset: 84; }
          35% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
