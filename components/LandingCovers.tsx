"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectCover } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import styles from "./LandingCovers.module.css";

/**
 * Covers for company-owned landing pages. Everything here is drawn fresh with this site's own styles:
 * no screenshots, characters, copy or layout from the original pages (their rights belong to the company).
 * Only the general mood is echoed: a retro game HUD, and playful draggable stickers.
 * The HUD background and hero are original pixel art made for this site (Codex image generation, 2026-10-27).
 */
export function LandingCover({ cover }: { cover: ProjectCover }) {
  return cover.look === "hud" ? <HudCover cover={cover} /> : <StickerCover cover={cover} />;
}

function HudCover({ cover }: { cover: ProjectCover }) {
  const [level, setLevel] = useState(1);
  const [stage, setStage] = useState(0);
  const timer = useRef<number | null>(null);

  function start() {
    stop();
    timer.current = window.setInterval(() => {
      setLevel((lv) => {
        const next = Math.min(99, lv + 3);
        setStage(Math.min(3, Math.floor(next / 25)));
        if (next >= 99) stop();
        return next;
      });
    }, 45);
  }
  function stop() {
    if (timer.current !== null) window.clearInterval(timer.current);
    timer.current = null;
  }
  function reset() {
    stop();
    setLevel(1);
    setStage(0);
  }
  useEffect(() => stop, []);

  return (
    <div
      className={styles.hud}
      style={{ "--bg": `url(${assetPath("/assets/landing/landing-bg.webp")})` } as React.CSSProperties}
      onPointerEnter={start}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <div className={styles.hudBar}>
        <span>PLAYER 1</span>
        <span className={styles.hudLv}>LV {String(level).padStart(2, "0")}</span>
        <i><b style={{ width: `${level}%` }} /></i>
        <span>EXP</span>
      </div>
      <div className={styles.hudTitle}>
        {cover.lines[0]}
        <small><span className={styles.blink}>▶</span> {cover.lines[1]}</small>
      </div>
      <ol className={styles.stages}>
        {["1", "2", "3", "?"].map((name, i) => (
          <li key={name} data-clear={i < stage}>{i < stage ? "★" : name}</li>
        ))}
      </ol>
      <span className={styles.sprite} style={{ left: `calc(8% + ${stage} * 26%)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath("/assets/landing/landing-hero.webp")} alt="" width={129} height={160} />
      </span>
      <small className={styles.caption}>{cover.caption}</small>
    </div>
  );
}

const STICKERS = [
  { text: "WOW!", kind: "burst", x: 64, y: 14, r: 8 },
  { text: "LIKE ♥", kind: "pill", x: 70, y: 52, r: -10 },
  { text: "★ NEW", kind: "star", x: 8, y: 66, r: -6 },
  { text: "PLAY ▶", kind: "tape", x: 44, y: 60, r: 4 },
  { text: "HOT", kind: "dot", x: 86, y: 30, r: 12 },
] as const;

function StickerCover({ cover }: { cover: ProjectCover }) {
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number }[]>(() => STICKERS.map((s) => ({ x: s.x, y: s.y })));
  const [dragging, setDragging] = useState<number | null>(null);
  const [flood, setFlood] = useState({ x: 50, y: 50 });
  const grab = useRef({ dx: 0, dy: 0 });

  function toPercent(e: React.PointerEvent) {
    const r = box.current!.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 };
  }
  function down(i: number, e: React.PointerEvent) {
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
    const p = toPercent(e);
    grab.current = { dx: p.x - pos[i].x, dy: p.y - pos[i].y };
    setDragging(i);
  }
  function move(e: React.PointerEvent) {
    if (box.current) setFlood(toPercent(e));
    if (dragging === null) return;
    const p = toPercent(e);
    const x = Math.max(0, Math.min(88, p.x - grab.current.dx));
    const y = Math.max(4, Math.min(84, p.y - grab.current.dy));
    setPos((all) => all.map((q, i) => (i === dragging ? { x, y } : q)));
  }

  return (
    <div
      ref={box}
      className={styles.sticker}
      style={{ "--fx": `${flood.x}%`, "--fy": `${flood.y}%` } as React.CSSProperties}
      onPointerMove={move}
      onPointerUp={() => setDragging(null)}
      onPointerCancel={() => setDragging(null)}
    >
      <span className={styles.flood} aria-hidden="true" />
      <p className={styles.bigType} aria-hidden="true">
        {cover.lines.map((line) => (
          <span key={line} className={styles.word}>
            {[...line].map((ch, i) => <span key={i} style={{ "--i": i } as React.CSSProperties}>{ch}</span>)}
          </span>
        ))}
      </p>
      {STICKERS.map((s, i) => (
        <button
          key={s.text}
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className={`${styles.stk} ${styles[s.kind]} ${dragging === i ? styles.held : ""}`}
          style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%`, "--r": `${s.r}deg`, "--d": `${i * 70}ms` } as React.CSSProperties}
          onPointerDown={(e) => down(i, e)}
        >
          {s.text}
        </button>
      ))}
      <div className={styles.band} aria-hidden="true">
        <div>{Array.from({ length: 2 }, () => cover.chips.map((c) => `${c} ✦ `).join("")).join("")}</div>
      </div>
      <small className={styles.hint} aria-hidden="true">스티커를 끌어 보세요</small>
      <small className={styles.caption} aria-hidden="true">{cover.caption}</small>
    </div>
  );
}
