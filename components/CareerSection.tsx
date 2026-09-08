"use client";

import { useState } from "react";
import { capabilities, careers, type Track } from "@/content/portfolio";
import styles from "@/app/page.module.css";

const trackLabel: Record<Track, string> = { ai: "AI", sound: "Sound" };

function trackAccentVar(track: Track) {
  return track === "ai" ? "var(--accent-ai)" : "var(--accent-sound)";
}

export function CareerSection() {
  const [selectedId, setSelectedId] = useState(careers[0].id);
  const selected = careers.find((career) => career.id === selectedId) ?? careers[0];
  const accentStyle =
    selected.tracks.length > 1
      ? { "--career-accent": "var(--accent-sound)", "--career-accent-2": "var(--accent-ai)" }
      : { "--career-accent": trackAccentVar(selected.tracks[0]), "--career-accent-2": trackAccentVar(selected.tracks[0]) };

  return (
    <section className={styles.careerSection} id="career" aria-labelledby={`career-title-${selected.id}`}>
      <div className={styles.careerStage} data-career={selected.id} style={accentStyle as React.CSSProperties}>
        <div className={styles.careerVisual} aria-hidden="true">
          <span className={styles.careerVisualMark}>{selected.tabLabel}</span>
          <span className={styles.careerVisualSpectrum}>
            {Array.from({ length: 20 }, (_, i) => <i key={i} style={{ "--h": (0.2 + 0.8 * Math.abs(Math.sin(i * 0.6))).toFixed(2) } as React.CSSProperties} />)}
          </span>
          <span className={styles.careerVisualEdge} />
        </div>
        <div className={styles.careerCopy}>
          <p className={styles.kicker}><span>02</span> Career</p>
          <div className={styles.careerPanels} aria-live="polite">
            {careers.map((career) => {
              const isSelected = career.id === selected.id;

              return (
                <div
                  key={career.id}
                  className={`${styles.careerContent} ${isSelected ? styles.careerContentActive : ""}`}
                  aria-hidden={!isSelected}
                >
                  <div className={styles.trackBadge}>
                    {career.tracks.map((track) => (
                      <span key={track} data-track={track}><i />{trackLabel[track]}</span>
                    ))}
                  </div>
                  <p className={styles.careerPeriod}>{career.period}</p>
                  <h2 id={`career-title-${career.id}`}>{career.company}</h2>
                  <p className={styles.careerRole}>{career.role}</p>
                  <p className={styles.careerDescription}>{career.description}</p>
                  <div className={styles.careerHighlightGroups}>
                    {career.highlightGroups.map((group) => (
                      <div key={group.label} className={styles.careerGroup} data-track={group.track}>
                        <p className={styles.careerGroupLabel}><i />{group.label}</p>
                        <ul>
                          {group.items.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className={styles.careerTags}>{career.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.careerSelector} role="group" aria-label="경력 선택">
          {careers.map((career, index) => (
            <button
              key={career.id}
              type="button"
              aria-pressed={career.id === selected.id}
              onClick={() => setSelectedId(career.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{career.tabLabel}</strong>
              <small>{career.tabPeriod}</small>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className={styles.capabilitiesHeading}>
          <p>Selected expertise</p>
          <h3 id="capabilities-title">Capabilities</h3>
        </div>
        <dl className={styles.capabilityGroups}>
          <div>
            <dt>Core Practice</dt>
            <dd>{capabilities.practice.map((item) => <span key={item}>{item}</span>)}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{capabilities.tools.map((item) => <span key={item}>{item}</span>)}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
