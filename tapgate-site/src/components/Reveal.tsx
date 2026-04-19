"use client";

import { type ReactNode } from "react";
import useInView from "@/hooks/useInView";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

type TagName = "div" | "section" | "article" | "li" | "span";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: TagName;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const [setRef, inView] = useInView();
  const visible = reduce || inView;

  return (
    <Tag
      ref={setRef as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
