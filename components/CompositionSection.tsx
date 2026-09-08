import { composition } from "@/content/portfolio";
import styles from "@/app/page.module.css";

const KEY_COUNT = 24;

export function CompositionSection() {
  return (
    <section className={styles.compositionSection} id="composition" aria-labelledby="composition-title">
      <div className={styles.compositionKeys} aria-hidden="true">
        {Array.from({ length: KEY_COUNT }, (_, i) => <i key={i} data-sharp={[1, 3, 6, 8, 10].includes(i % 12) ? "true" : undefined} />)}
      </div>
      <div className={styles.compositionContent}>
        <p className={styles.kicker}><span>05</span> Composition</p>
        <h2 id="composition-title">{composition.channel}</h2>
        <p className={styles.compositionSubtitle}>Piano · Self-composed</p>
        <p className={styles.compositionText}>{composition.note}</p>
        <a className={styles.compositionLink} href={composition.url} target="_blank" rel="noreferrer">
          채널 방문 <span>↗</span>
        </a>
      </div>
    </section>
  );
}
