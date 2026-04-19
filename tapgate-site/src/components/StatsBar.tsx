"use client";

import { useState } from "react";
import useInView from "@/hooks/useInView";
import useRafProgress from "@/hooks/useRafProgress";

const stats = [
  { label: "Range", value: 30, unit: "m", prefix: "" },
  { label: "Response", value: 1, unit: "sec", prefix: "<" },
  { label: "Install", value: 10, unit: "min", prefix: "" },
  { label: "Keys", value: 20, unit: "included", prefix: "" },
];

export default function StatsBar() {
  const [setRef, play] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={setRef}
      className="relative bg-[var(--color-charcoal)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 20%, rgba(14,109,107,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center md:px-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 mb-3">
                {s.label}
              </p>
              <p className="font-serif-italic text-5xl md:text-7xl text-white leading-none relative">
                {s.prefix}
                <CountUp target={s.value} play={play} delay={i * 120} />
                <span className="font-mono text-sm font-medium normal-case tracking-[0.18em] text-[var(--color-teal-light)] ml-2 align-super not-italic">
                  {s.unit}
                </span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 text-center max-w-xl mx-auto leading-relaxed">
          Range measured line-of-sight on Bluetooth 5.0 · Response measured tap-to-trigger on iPhone 15 at 3&nbsp;m
        </p>
      </div>
    </section>
  );
}

function CountUp({
  target,
  play,
  delay = 0,
}: {
  target: number;
  play: boolean;
  delay?: number;
}) {
  const [value, setValue] = useState(0);

  useRafProgress({
    play,
    duration: 900,
    delay,
    onFrame: (t) => {
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(eased * target);
      setValue((prev) => (prev === next ? prev : next));
    },
  });

  return <span className="tabular-nums">{value}</span>;
}
