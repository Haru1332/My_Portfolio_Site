import Image from "next/image";
import { composition } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import styles from "@/app/page.module.css";

const KEY_COUNT = 24;

export function CompositionSection() {
  return (
    <section className={styles.compositionSection} id="composition" aria-labelledby="composition-title">
      <div className={styles.compositionKeys} aria-hidden="true">
        {Array.from({ length: KEY_COUNT }, (_, i) => <i key={i} data-sharp={[1, 3, 6, 8, 10].includes(i % 12) ? "true" : undefined} />)}
      </div>
      <div className={styles.compositionLayout}>
        <div className={styles.compositionContent}>
          <p className={styles.kicker}><span>05</span> Composition</p>
          <h2 id="composition-title">{composition.channel}</h2>
          <p className={styles.compositionSubtitle}>YouTube Channel · Piano · Self-composed</p>
          <p className={styles.compositionText}>{composition.note}</p>
          <a className={styles.compositionLink} href={composition.url} target="_blank" rel="noreferrer">
            유튜브 채널 방문 <span>↗</span>
          </a>
        </div>
        <a
          className={styles.compositionLogo}
          href={composition.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${composition.channel} 유튜브 채널 방문`}
        >
          <Image src={assetPath("/assets/composition/byeolsua-logo.jpg")} alt={`${composition.channel} 로고`} fill sizes="(max-width: 1024px) 140px, 240px" />
        </a>
      </div>
    </section>
  );
}
