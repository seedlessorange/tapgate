"use client";

import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

/**
 * Drives an animation via requestAnimationFrame. Invokes `onFrame(t)` with
 * progress t ∈ [0, 1] until the duration elapses, then emits t=1 once.
 * Skipped entirely under prefers-reduced-motion (onFrame(1) is called once
 * so consumers land in the final state).
 *
 * Runs when `play` flips to true. Cleans up on unmount.
 */
export default function useRafProgress({
  play,
  duration,
  delay = 0,
  onFrame,
}: {
  play: boolean;
  duration: number;
  delay?: number;
  onFrame: (t: number) => void;
}) {
  const reduce = usePrefersReducedMotion();
  const onFrameRef = useRef(onFrame);
  onFrameRef.current = onFrame;

  useEffect(() => {
    if (!play) return;
    if (reduce) {
      onFrameRef.current(1);
      return;
    }
    let raf = 0;
    const startTimer = window.setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        onFrameRef.current(t);
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(raf);
    };
  }, [play, duration, delay, reduce]);
}
