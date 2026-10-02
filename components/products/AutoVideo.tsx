"use client";

import { useEffect, useRef } from "react";
import { assetPath } from "@/lib/asset-path";

type AutoVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/** Muted looping screen recording that only plays while on screen. Reduced-motion users get the poster and controls instead. */
export function AutoVideo({ src, poster, label, className }: AutoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      key={src}
      className={className}
      src={assetPath(src)}
      poster={assetPath(poster)}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
