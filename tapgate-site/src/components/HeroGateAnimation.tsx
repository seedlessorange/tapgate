"use client";

import { useCallback, useEffect, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

/**
 * Interactive driveway gate. On first mount it auto-plays one open/close
 * cycle (skipped under prefers-reduced-motion), then hands control to
 * the user.
 */
export default function HeroGateAnimation() {
  const [open, setOpen] = useState(false);
  const [pingKey, setPingKey] = useState(0);
  const reduce = usePrefersReducedMotion();

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setPingKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const t1 = window.setTimeout(() => {
      setOpen(true);
      setPingKey((k) => k + 1);
    }, 1400);
    const t2 = window.setTimeout(() => setOpen(false), 4200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [reduce]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={open ? "Tap to close gate" : "Tap to open gate"}
      className="relative w-full max-w-[520px] aspect-[4/3] cursor-pointer select-none mx-auto bg-transparent border-0 p-0"
    >
      <div
        className={`absolute inset-x-8 bottom-10 h-40 rounded-full blur-3xl transition-opacity duration-700 ${
          open ? "opacity-100" : "opacity-40"
        }`}
        style={{
          background:
            "radial-gradient(ellipse, rgba(14,109,107,0.35) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[var(--color-hairline)]">
        <span
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            open
              ? "bg-[var(--color-teal)] shadow-[0_0_10px_var(--color-teal)]"
              : "bg-[var(--color-warmgray-light)]"
          }`}
        />
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
            open ? "text-[var(--color-teal)]" : "text-[var(--color-warmgray)]"
          }`}
        >
          {open ? "Gate open" : "Gate closed"}
        </span>
      </div>

      <div className="absolute bottom-[24%] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[var(--color-teal)]/40 to-transparent" />
      <div className="absolute bottom-[20%] left-[12%] right-[12%] h-1 rounded-full bg-gradient-to-r from-transparent via-[var(--color-teal-dim)] to-transparent blur-sm" aria-hidden />

      <Post side={-1} open={open} />
      <Post side={1} open={open} />
      <Panel side={-1} open={open} />
      <Panel side={1} open={open} />

      {pingKey > 0 && <SignalWaves key={pingKey} />}

      <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-16 h-28 rounded-[14px] border-2 border-[var(--color-charcoal)] bg-gradient-to-b from-[var(--color-charcoal)] to-[#0a1414] flex items-center justify-center shadow-[0_12px_28px_rgba(15,26,26,0.25)] z-10">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-black/40" />
        <div className="w-11 h-20 bg-[#051010] rounded-[8px] flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 24 24"
            className={`w-7 h-7 transition-transform duration-300 ${
              open ? "scale-110" : "scale-100"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--color-teal)" }}
          >
            <path d="M6 12a6 6 0 0112 0c0 3-1 5-2 7" />
            <path d="M9 12a3 3 0 016 0c0 3-1 5-2 6" />
            <path d="M12 12v6" />
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-warmgray)]">
        {open ? "Tap to close" : "Tap to open"}
      </div>
    </button>
  );
}

function Post({ side, open }: { side: -1 | 1; open: boolean }) {
  return (
    <div
      className="absolute bottom-[24%] w-3.5 h-[44%] rounded-sm bg-gradient-to-b from-[var(--color-teal)] via-[var(--color-teal)] to-[var(--color-teal-press)]"
      style={{ [side === -1 ? "left" : "right"]: "16%" }}
    >
      <span
        className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-500 ${
          open
            ? "bg-[var(--color-teal)] shadow-[0_0_22px_var(--color-teal)]"
            : "bg-[var(--color-teal)]/80 shadow-[0_0_8px_var(--color-teal-dim)]"
        }`}
      />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-[var(--color-charcoal)]/20 blur-sm" />
    </div>
  );
}

function Panel({ side, open }: { side: -1 | 1; open: boolean }) {
  const rotate = open ? side * 75 : 0;
  const insetStyle =
    side === -1
      ? { left: "calc(16% + 14px)", width: "calc(34% - 14px)" }
      : { right: "calc(16% + 14px)", width: "calc(34% - 14px)" };

  return (
    <div
      className="absolute bottom-[24%] h-[38%] border-[1.5px] border-[var(--color-teal)]/80 bg-gradient-to-b from-[var(--color-teal)]/15 to-[var(--color-teal)]/5 backdrop-blur-[2px]"
      style={{
        ...insetStyle,
        transformOrigin: side === -1 ? "left center" : "right center",
        transform: `perspective(700px) rotateY(${rotate}deg)`,
        transition: `transform 850ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      <div className="absolute top-[12%] bottom-[12%] left-[28%] w-px bg-[var(--color-teal)]/60" />
      <div className="absolute top-[12%] bottom-[12%] left-[52%] w-px bg-[var(--color-teal)]/60" />
      <div className="absolute top-[12%] bottom-[12%] left-[76%] w-px bg-[var(--color-teal)]/60" />
      <div className="absolute left-[8%] right-[8%] top-[28%] h-px bg-[var(--color-teal)]/45" />
      <div className="absolute left-[8%] right-[8%] top-[68%] h-px bg-[var(--color-teal)]/45" />
    </div>
  );
}

function SignalWaves() {
  return (
    <div className="absolute inset-x-0 bottom-[20%] flex justify-center pointer-events-none" aria-hidden>
      <div className="relative w-20 h-20">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-[var(--color-teal)]"
            style={{
              animation: `signalPulse 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${i * 0.22}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes signalPulse {
          0% {
            opacity: 0.7;
            transform: scale(0.3);
          }
          100% {
            opacity: 0;
            transform: scale(3.8);
          }
        }
      `}</style>
    </div>
  );
}
