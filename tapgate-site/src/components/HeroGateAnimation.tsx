"use client";

import { useState, useCallback } from "react";

export default function HeroGateAnimation() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div
      className="relative w-full max-w-[480px] h-[340px] cursor-pointer select-none mx-auto lg:mx-0"
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-label={open ? "Tap to close gate" : "Tap to open gate"}
      onKeyDown={(e) => e.key === "Enter" && toggle()}
    >
      {/* Status */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span
          className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            open
              ? "bg-[var(--color-teal)] shadow-[0_0_12px_var(--color-teal)]"
              : "bg-[var(--color-warmgray)]"
          }`}
        />
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
            open ? "text-[var(--color-teal)]" : "text-[var(--color-warmgray)]"
          }`}
        >
          {open ? "Gate Open" : "Gate Closed"}
        </span>
      </div>

      {/* Ground line */}
      <div className="absolute bottom-[22%] left-[8%] right-[8%] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-teal-muted)] to-transparent" />

      {/* Posts */}
      <div className="absolute bottom-[22%] left-[18%] w-3 h-[140px] rounded bg-gradient-to-b from-[var(--color-teal)] to-[var(--color-teal)]/60">
        <span
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 ${
            open
              ? "bg-[var(--color-teal)] shadow-[0_0_20px_var(--color-teal)]"
              : "bg-[var(--color-teal)]/80 shadow-[0_0_8px_var(--color-teal)]"
          }`}
        />
      </div>
      <div className="absolute bottom-[22%] right-[18%] w-3 h-[140px] rounded bg-gradient-to-b from-[var(--color-teal)] to-[var(--color-teal)]/60">
        <span
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 ${
            open
              ? "bg-[var(--color-teal)] shadow-[0_0_20px_var(--color-teal)]"
              : "bg-[var(--color-teal)]/80 shadow-[0_0_8px_var(--color-teal)]"
          }`}
        />
      </div>

      {/* Gate panels */}
      <div
        className="absolute bottom-[22%] h-[120px] border-2 border-[var(--color-teal)] bg-gradient-to-b from-[var(--color-teal)]/30 to-[var(--color-teal)]/10 transition-transform duration-700"
        style={{
          left: "calc(18% + 12px)",
          width: "calc(32% - 12px)",
          transformOrigin: "left center",
          transform: open ? "perspective(600px) rotateY(-70deg)" : "none",
        }}
      >
        {/* Bars */}
        <div className="absolute top-[15%] bottom-[15%] left-[30%] w-[1px] bg-[var(--color-teal)]/50" />
        <div className="absolute top-[15%] bottom-[15%] left-[60%] w-[1px] bg-[var(--color-teal)]/50" />
        <div className="absolute left-[10%] right-[10%] top-[35%] h-[1px] bg-[var(--color-teal)]/40" />
        <div className="absolute left-[10%] right-[10%] top-[65%] h-[1px] bg-[var(--color-teal)]/40" />
      </div>
      <div
        className="absolute bottom-[22%] h-[120px] border-2 border-[var(--color-teal)] bg-gradient-to-b from-[var(--color-teal)]/30 to-[var(--color-teal)]/10 transition-transform duration-700"
        style={{
          right: "calc(18% + 12px)",
          width: "calc(32% - 12px)",
          transformOrigin: "right center",
          transform: open ? "perspective(600px) rotateY(70deg)" : "none",
        }}
      >
        <div className="absolute top-[15%] bottom-[15%] left-[30%] w-[1px] bg-[var(--color-teal)]/50" />
        <div className="absolute top-[15%] bottom-[15%] left-[60%] w-[1px] bg-[var(--color-teal)]/50" />
        <div className="absolute left-[10%] right-[10%] top-[35%] h-[1px] bg-[var(--color-teal)]/40" />
        <div className="absolute left-[10%] right-[10%] top-[65%] h-[1px] bg-[var(--color-teal)]/40" />
      </div>

      {/* Signal waves */}
      {open && (
        <>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-[var(--color-teal)] opacity-0 animate-[signalExpand_1s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </>
      )}

      {/* Phone */}
      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-14 h-24 rounded-xl border-2 border-[var(--color-teal)] bg-gradient-to-b from-[var(--color-charcoal)] to-[#1a1a1a] flex items-center justify-center shadow-lg z-10">
        <div className="w-9 h-16 bg-[#0f1a1a] rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
      </div>

      {/* Tap indicator */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-teal)] animate-pulse">
        {open ? "Tap to close" : "Tap to open"}
      </div>

      <style jsx>{`
        @keyframes signalExpand {
          0% { opacity: 0.7; transform: translateX(-50%) scale(0.5); }
          100% { opacity: 0; transform: translateX(-50%) scale(3.5) translateY(-60px); }
        }
      `}</style>
    </div>
  );
}
