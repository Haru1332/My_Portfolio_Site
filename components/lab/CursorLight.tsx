"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "@/components/lab/lab.module.css";

/** Soft light that follows the pointer across every Haru Lab page. Mouse users only; off for reduced motion. */
export function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const tone = pathname?.includes("/sokssok") ? "pink" : "blue";

  useEffect(() => {
    const light = ref.current;
    if (!light) return;
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const render = () => {
      light.style.setProperty("--x", `${x}px`);
      light.style.setProperty("--y", `${y}px`);
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      light.dataset.on = "true";
      if (!frame) frame = requestAnimationFrame(render);
    };
    const leave = () => { delete light.dataset.on; };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className={styles.cursorLight} data-tone={tone} aria-hidden="true" />;
}
