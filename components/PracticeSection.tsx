import Image from "next/image";
import { composition, productionToolkit } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import styles from "@/app/page.module.css";

export function PracticeSection() {
  return (
    <section className={styles.practiceSection} id="practice" aria-labelledby="practice-title">
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>05</span> Practice</p>
          <h2 id="practice-title">오디오 제작 공정 자동화 툴킷</h2>
        </div>
        <div className={styles.count}><strong>4</strong><span>Desktop<br />Tools</span></div>
      </header>
      <p className={styles.practiceIntro}>
        오디오 제작 현장에서 사운드 PD와 엔지니어가 반복적으로 수행하는 공정을 직접 관찰하고,
        Python 기반 도구와 AI 코딩 어시스턴트로 단계별 자동화한 실무 툴킷입니다.
        원고와 녹음본 같은 민감한 제작 데이터가 외부로 나가지 않도록 로컬 실행을 기본 원칙으로 두었습니다.
      </p>
      <div className={styles.toolkitGrid}>
        {productionToolkit.map((tool) => (
          <article key={tool.name} className={styles.toolkitCard}>
            {tool.screenshot && (
              <div className={styles.toolkitShot}>
                <Image src={assetPath(tool.screenshot)} alt="" fill sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
            )}
            <div className={styles.toolkitBody}>
              <p className={styles.toolkitIcon} aria-hidden="true">{tool.icon}</p>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <div className={styles.toolkitTags}>{tool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.compositionNote}>
        <p className={styles.kicker}><span>♪</span> Also</p>
        <p>
          <a href={composition.url} target="_blank" rel="noreferrer">{composition.channel}</a>{" "}
          — {composition.note}
        </p>
      </div>
    </section>
  );
}
