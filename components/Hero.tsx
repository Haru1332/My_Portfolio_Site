"use client";

import { useEffect, useMemo, useRef } from "react";
import { profile } from "@/content/portfolio";
import styles from "@/app/page.module.css";

const BAR_COUNT = 64;

function buildBars() {
  return Array.from({ length: BAR_COUNT }, (_, i) => {
    const t = i / (BAR_COUNT - 1);
    const height = 0.14 + 0.86 * Math.abs(Math.sin(i * 0.37) * 0.55 + Math.sin(i * 0.13 + 1.3) * 0.45);
    const delay = (Math.sin(i * 0.71) * 0.5 + 0.5) * 2.4;
    return { t, height, delay };
  });
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const bars = useMemo(() => buildBars(), []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedMotion.matches || !finePointer.matches) return;

    let frame: number | null = null;
    let pointerX = 0.72;
    let pointerY = 0.32;

    const renderPointer = () => {
      hero.style.setProperty("--pointer-x", `${(pointerX * 100).toFixed(2)}%`);
      hero.style.setProperty("--pointer-y", `${(pointerY * 100).toFixed(2)}%`);
      hero.style.setProperty("--hero-x", `${((pointerX - 0.5) * 14).toFixed(2)}px`);
      hero.style.setProperty("--hero-y", `${((pointerY - 0.5) * 10).toFixed(2)}px`);
      frame = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = frameRef.current?.getBoundingClientRect() ?? hero.getBoundingClientRect();
      pointerX = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
      pointerY = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);
      hero.dataset.pointerActive = "true";
      if (frame === null) frame = window.requestAnimationFrame(renderPointer);
    };

    const handlePointerLeave = () => {
      delete hero.dataset.pointerActive;
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
    };

    hero.addEventListener("pointermove", handlePointerMove, { passive: true });
    hero.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} id="profile" aria-labelledby="hero-title">
      <div ref={frameRef} className={styles.heroFrame}>
        <div className={styles.heroAtmosphere} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.pointerLight} aria-hidden="true" />
        <div className={styles.heroSpectrum} aria-hidden="true">
          {bars.map((bar, index) => (
            <i
              key={index}
              style={{
                "--t": bar.t.toFixed(3),
                "--h": bar.height.toFixed(3),
                "--delay": `${bar.delay.toFixed(2)}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span>01</span> Profile</p>
          <h1 id="hero-title"><span>Sound</span><span>× Voice AI</span></h1>
          <p>게임 사운드와 음성 AI 사이에서, 장면과 모델 결과물에 어떤 소리가 필요한지<br />먼저 판단하고 직접 만듭니다.</p>
        </div>
        <div className={styles.heroCredit}>
          <span>{profile.roleLine}</span><strong>{profile.nameKo}</strong><small>{profile.nameEn}</small>
        </div>
        <a className={styles.scrollCue} href="#career"><span>Scroll to enter</span><i aria-hidden="true" /></a>
      </div>
    </section>
  );
}
