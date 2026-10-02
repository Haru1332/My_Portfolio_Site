"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/components/products/product.module.css";

type Note = { id: number; label: string; x: number; y: number };

const notes: Note[] = [
  { id: 1, label: "방음 vs 흡음", x: 300, y: 205 },
  { id: 2, label: "룸 어쿠스틱 기초", x: 175, y: 120 },
  { id: 3, label: "흡음재 배치 메모", x: 435, y: 115 },
  { id: 4, label: "마이크 근접 효과", x: 120, y: 255 },
  { id: 5, label: "보컬 녹음 체크리스트", x: 265, y: 330 },
  { id: 6, label: "노이즈 게이트", x: 455, y: 295 },
  { id: 7, label: "EQ 기본", x: 540, y: 205 },
  { id: 8, label: "컴프레서 입문", x: 520, y: 375 },
  { id: 9, label: "구독자 질문 모음", x: 75, y: 160 },
  { id: 10, label: "에어컨 소음 줄이기", x: 385, y: 385 },
  { id: 11, label: "리버브 이해하기", x: 310, y: 60 },
  { id: 12, label: "다이내믹 vs 콘덴서", x: 85, y: 355 },
];

const links: Array<[number, number]> = [
  [1, 2], [1, 3], [1, 5], [1, 10], [1, 11], [2, 3], [2, 9], [2, 11], [4, 5], [4, 12],
  [5, 12], [5, 6], [6, 10], [6, 7], [7, 8], [3, 11], [9, 4], [8, 5],
];

type Ref = number[];
type Topic = {
  title: string;
  plan: {
    headline: string;
    hook: { text: string; refs: Ref };
    outline: Array<{ head: string; text: string; refs: Ref }>;
    web: string[];
  };
};

const topics: Topic[] = [
  {
    title: "집에서 보컬 녹음 잘하는 법",
    plan: {
      headline: "비싼 마이크 사기 전에 먼저 바꿔야 할 3가지",
      hook: { text: "같은 마이크로 녹음했는데, 거리만 바꿨더니 소리가 완전히 달라졌습니다.", refs: [4] },
      outline: [
        { head: "거리부터 맞추기", text: "입과 마이크 사이 한 뼘. 근접 효과로 저음이 부푸는 걸 막습니다.", refs: [4] },
        { head: "마이크 고르기", text: "집에서는 다이내믹 마이크가 방 소리를 덜 담습니다.", refs: [12] },
        { head: "방 울림 줄이기", text: "녹음 전에 울림과 소음부터 확인합니다.", refs: [5, 2] },
      ],
      web: ["홈 레코딩 입문 가이드", "마이크 근접 효과 해설"],
    },
  },
  {
    title: "방음과 흡음, 뭐가 다를까",
    plan: {
      headline: "흡음재를 붙였는데 옆집 소리가 그대로인 이유",
      hook: { text: "벽에 흡음재를 가득 붙였는데, 옆집 TV 소리는 그대로 들립니다.", refs: [9] },
      outline: [
        { head: "방음과 흡음은 다른 일", text: "방음은 소리를 막고, 흡음은 방 안의 울림을 줄입니다.", refs: [1] },
        { head: "흡음재는 어디에", text: "소리가 처음 부딪히는 벽부터 붙입니다.", refs: [3, 2] },
        { head: "녹음이 이렇게 달라집니다", text: "울림이 줄어든 전후를 들려줍니다.", refs: [11] },
      ],
      web: ["실내 음향 입문 자료", "흡음재 시공 가이드"],
    },
  },
  {
    title: "녹음 잡음 없애기",
    plan: {
      headline: "녹음 파일 '쉬익' 소리, 원인 3가지와 해결법",
      hook: { text: "편집할 때마다 들리는 '쉬익' 소리, 대부분 녹음 전에 막을 수 있습니다.", refs: [10] },
      outline: [
        { head: "소음원부터 끄기", text: "에어컨, 냉장고, 컴퓨터 팬을 먼저 확인합니다.", refs: [10] },
        { head: "노이즈 게이트", text: "말하지 않는 구간의 잡음만 줄입니다.", refs: [6] },
        { head: "EQ로 마무리", text: "남은 저음 웅웅거림은 EQ로 정리합니다.", refs: [7] },
      ],
      web: ["노이즈 게이트 설정 가이드", "가정 녹음 소음 줄이기"],
    },
  },
];

/** Notes cited by a plan, in the order they first appear. */
const citedNotes = (topic: Topic) => [...new Set([topic.plan.hook.refs, ...topic.plan.outline.map((line) => line.refs)].flat())];
const PANEL_STEPS = 5;

function Cites({ refs, onHover }: { refs: Ref; onHover: (id: number | null) => void }) {
  return (
    <>
      {refs.map((id) => (
        <button key={id} type="button" className={styles.cite} onPointerEnter={() => onHover(id)} onPointerLeave={() => onHover(null)} onFocus={() => onHover(id)} onBlur={() => onHover(null)} aria-label={`근거: ${notes[id - 1].label}`}>
          {notes[id - 1].label}
        </button>
      ))}
    </>
  );
}

const neighbors = (id: number) => links.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));

/** shown: -1 = not the current topic (invisible, only reserves space), 0 = loading, 1–5 = blocks revealed so far. */
function PlanCard({ topic, shown, onHover }: { topic: Topic; shown: number; onHover: (id: number | null) => void }) {
  const cited = citedNotes(topic);
  const on = (step: number) => shown >= step;
  return (
    <div className={styles.planCard} data-on={shown >= 0} aria-hidden={shown < 0} aria-live={shown >= 0 ? "polite" : undefined}>
      <p className={styles.planLabel}>기획 카드 <span>{topic.title}</span></p>
      {shown === 0 && <div className={styles.planSkeleton} aria-hidden="true"><i /><i /><i /><i /></div>}
      <h4 className={styles.planHeadline} data-on={on(1)}>{topic.plan.headline}</h4>
      <div className={styles.planBlock} data-on={on(2)}>
        <p className={styles.planBlockTitle}>후킹 <small>0:00–0:15</small></p>
        <p>“{topic.plan.hook.text}”<Cites refs={topic.plan.hook.refs} onHover={onHover} /></p>
      </div>
      <div className={styles.planBlock} data-on={on(3)}>
        <p className={styles.planBlockTitle}>구성</p>
        <ol className={styles.planOutline}>
          {topic.plan.outline.map((line) => (
            <li key={line.head}>
              <strong>{line.head}</strong>
              <span>{line.text}<Cites refs={line.refs} onHover={onHover} /></span>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.planBlock} data-on={on(4)}>
        <p className={styles.planBlockTitle}>출처</p>
        <ul className={styles.planSources}>
          {cited.map((id, index) => (
            <li key={id} onPointerEnter={() => onHover(id)} onPointerLeave={() => onHover(null)}>
              <b>{index + 1}</b>{notes[id - 1].label}<em>내 노트</em>
            </li>
          ))}
          {topic.plan.web.map((item) => (
            <li key={item} className={styles.planWeb}><b>↗</b>{item}<em>원문 대조 ✓</em></li>
          ))}
        </ul>
      </div>
      <p className={styles.planCheck} data-on={on(5)}><span>✓</span> 발행 전 점검 · 근거 없는 수치 0개 · 과장 표현 0개</p>
    </div>
  );
}

/** Pick a topic → cited notes light up one by one → a planning card fills in next to them. */
export function GraphDemo() {
  const [topicIndex, setTopicIndex] = useState<number | null>(null);
  const [lit, setLit] = useState(0);
  const [shown, setShown] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const topic = topicIndex === null ? null : topics[topicIndex];
  const cited = topic ? citedNotes(topic) : [];
  const litNotes = cited.slice(0, lit);

  // Light the cited notes one at a time, then fill in the planning card block by block.
  // (Reduced motion skips straight to the end in choose().)
  useEffect(() => {
    if (!topic) return;
    if (lit < cited.length) {
      const timer = window.setTimeout(() => setLit((value) => value + 1), 260);
      return () => window.clearTimeout(timer);
    }
    if (shown < PANEL_STEPS) {
      const timer = window.setTimeout(() => setShown((value) => value + 1), 280);
      return () => window.clearTimeout(timer);
    }
  }, [topic, lit, shown, cited.length]);

  // Gentle drift of the whole graph; positions are written straight to the DOM to avoid re-rendering every frame.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let running = false;
    const offset = (id: number, t: number) => [Math.sin(t / 1400 + id * 1.7) * 6, Math.cos(t / 1700 + id * 2.3) * 5];
    const tick = (t: number) => {
      for (const note of notes) {
        const [dx, dy] = offset(note.id, t);
        svg.querySelector(`[data-note="${note.id}"]`)?.setAttribute("transform", `translate(${note.x + dx} ${note.y + dy})`);
      }
      for (const [a, b] of links) {
        const line = svg.querySelector(`[data-link="${a}-${b}"]`);
        const na = notes[a - 1];
        const nb = notes[b - 1];
        const [ax, ay] = offset(a, t);
        const [bx, by] = offset(b, t);
        line?.setAttribute("x1", String(na.x + ax));
        line?.setAttribute("y1", String(na.y + ay));
        line?.setAttribute("x2", String(nb.x + bx));
        line?.setAttribute("y2", String(nb.y + by));
      }
      if (running) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (running) frame = requestAnimationFrame(tick);
    });
    observer.observe(svg);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  function choose(index: number) {
    const instant = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTopicIndex(index);
    setLit(instant ? citedNotes(topics[index]).length : 0);
    setShown(instant ? PANEL_STEPS : 0);
  }

  const focus = hovered !== null ? [hovered, ...neighbors(hovered)] : litNotes;
  const noteState = (id: number) => (focus.includes(id) ? "on" : focus.length ? "dim" : "idle");
  const linkOn = (a: number, b: number) => focus.includes(a) && focus.includes(b);

  return (
    <div className={styles.graphDemo}>
      <div className={styles.graphTopics} role="group" aria-label="주제 고르기">
        {topics.map((item, index) => (
          <button key={item.title} type="button" aria-pressed={index === topicIndex} onClick={() => choose(index)}>
            {item.title}
          </button>
        ))}
      </div>

      <div className={styles.graphBody}>
        <div className={styles.graphCanvas}>
          <svg ref={svgRef} viewBox="0 0 610 430" role="img" aria-label="옵시디언 노트 연결 그래프">
            {links.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                data-link={`${a}-${b}`}
                x1={notes[a - 1].x} y1={notes[a - 1].y} x2={notes[b - 1].x} y2={notes[b - 1].y}
                className={linkOn(a, b) ? styles.graphLinkOn : styles.graphLink}
              />
            ))}
            {notes.map((note) => (
              <g
                key={note.id}
                data-note={note.id}
                data-state={noteState(note.id)}
                transform={`translate(${note.x} ${note.y})`}
                className={styles.graphNote}
                onPointerEnter={() => setHovered(note.id)}
                onPointerLeave={() => setHovered(null)}
              >
                <circle r={note.id === 1 ? 11 : 8} />
                <text y={-16}>{note.label}</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Every topic's card is laid out in the same grid cell (unused ones invisible), so the panel is always
            as tall as the longest card and nothing below moves while a card fills in. */}
        <div className={styles.graphPanel}>
          <div className={styles.planStage}>
            <p className={styles.graphEmpty} data-on={topic === null}>위에서 주제를 고르면<br />내 노트에서 근거를 찾아 기획 카드를 만듭니다.</p>
            {topics.map((item, index) => (
              <PlanCard key={item.title} topic={item} shown={index === topicIndex ? shown : -1} onHover={setHovered} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
