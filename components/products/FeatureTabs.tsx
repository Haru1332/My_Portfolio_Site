"use client";

import { useState } from "react";
import { AutoVideo } from "@/components/products/AutoVideo";
import styles from "@/components/products/product.module.css";

export type FeatureTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  video: string;
  poster: string;
};

export function FeatureTabs({ tabs }: { tabs: FeatureTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist" aria-label="작동 방식">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={tab.id === active.id}
            aria-controls={`panel-${tab.id}`}
            className={styles.tab}
            onClick={() => setActiveId(tab.id)}
          >
            <span className={styles.tabIndex}>{String(index + 1).padStart(2, "0")}</span>
            <strong>{tab.label}</strong>
            <span className={styles.tabText}>{tab.description}</span>
          </button>
        ))}
      </div>
      <div className={styles.tabPanel} role="tabpanel" id={`panel-${active.id}`} aria-labelledby={`tab-${active.id}`}>
        <div className={styles.frame}>
          <div className={styles.frameBar} aria-hidden="true"><i /><i /><i /></div>
          <AutoVideo src={active.video} poster={active.poster} label={`${active.title} 화면 녹화`} className={styles.media} />
        </div>
      </div>
    </div>
  );
}
