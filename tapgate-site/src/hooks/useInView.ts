"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Callback-ref observer: returns `[setRef, inView]`. Once the target
 * crosses the threshold it flips inView true and stops observing.
 */
export default function useInView(
  options: IntersectionObserverInit = {},
): [(node: Element | null) => void, boolean] {
  const { threshold = 0.12, rootMargin = "0px 0px -60px 0px" } = options;
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (node: Element | null) => {
      observerRef.current?.disconnect();
      if (!node) return;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setInView(true);
              observerRef.current?.disconnect();
            }
          }
        },
        { threshold, rootMargin },
      );
      observerRef.current.observe(node);
    },
    [threshold, rootMargin],
  );

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return [setRef, inView];
}
