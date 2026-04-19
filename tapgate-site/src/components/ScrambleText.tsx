"use client";

import { useState, useMemo } from "react";
import useRafProgress from "@/hooks/useRafProgress";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#";
const FRAME_COUNT = 28;

/**
 * SSR renders the real text so JS-disabled users, screen readers, and
 * search engines see correct content; the scramble effect only runs
 * after mount.
 */
export default function ScrambleText({
  text,
  emphasis,
  as: Tag = "span",
  className = "",
  delay = 250,
  duration = 1300,
}: {
  text: string;
  emphasis?: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const [frame, setFrame] = useState(0);
  const [scrambling, setScrambling] = useState(false);

  const segments = useMemo(() => {
    if (!emphasis) return { before: text, em: "", after: "" };
    const idx = text.indexOf(emphasis);
    if (idx === -1) return { before: text, em: "", after: "" };
    return {
      before: text.slice(0, idx),
      em: emphasis,
      after: text.slice(idx + emphasis.length),
    };
  }, [text, emphasis]);

  useRafProgress({
    play: true,
    duration,
    delay,
    onFrame: (t) => {
      if (t >= 1) {
        setScrambling(false);
        return;
      }
      if (!scrambling) setScrambling(true);
      const nextFrame = Math.floor(t * FRAME_COUNT);
      setFrame((prev) => (prev === nextFrame ? prev : nextFrame));
    },
  });

  const total = segments.before.length + segments.em.length + segments.after.length;
  const lockedCount = Math.floor((frame * total) / 22);

  const scrambleSegment = (source: string, offset: number) => {
    if (!scrambling) return source;
    return source
      .split("")
      .map((ch, i) => {
        const globalIdx = offset + i;
        if (ch === " " || ch === "\n") return ch;
        if (globalIdx < lockedCount) return ch;
        return GLYPHS[(globalIdx + frame) % GLYPHS.length];
      })
      .join("");
  };

  const beforeOut = scrambleSegment(segments.before, 0);
  const emOut = scrambleSegment(segments.em, segments.before.length);
  const afterOut = scrambleSegment(
    segments.after,
    segments.before.length + segments.em.length,
  );

  // The wrapper carries the authoritative text via aria-label; visual
  // children are decorative for assistive tech at every phase.
  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">{beforeOut}</span>
      {segments.em && <em aria-hidden="true">{emOut}</em>}
      <span aria-hidden="true">{afterOut}</span>
    </Tag>
  );
}
