import Image from "next/image";
import type { ContentChannel } from "@/content/portfolio";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";
import styles from "@/app/page.module.css";

type AiContentSectionProps = {
  id: string;
  index: string;
  channels: ContentChannel[];
};

export function AiContentSection({ id, index, channels }: AiContentSectionProps) {
  return (
    <section className={styles.contentSection} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>{index}</span> AI Content Channels</p>
          <h2 id={`${id}-title`}>AI 콘텐츠 채널 운영</h2>
          <p className={styles.caseStudySectionNote}>
            생성형 AI 영상 도구가 막 등장했던 초기에, 기획부터 AI 생성·편집·채널 운영까지 직접 진행한 개인 실험입니다.
            회사 업무와는 무관하며, 공식 제작물이 아닙니다.
          </p>
        </div>
      </header>

      <div className={styles.contentChannelGrid}>
        {channels.map((channel) => <ChannelCard key={channel.id} channel={channel} />)}
      </div>
    </section>
  );
}

function ChannelCard({ channel }: { channel: ContentChannel }) {
  return (
    <article className={styles.contentChannel}>
      <div className={styles.contentChannelHead}>
        <span className={styles.contentChannelLang}>{channel.language}</span>
        <h3>{channel.name}</h3>
        <span className={styles.contentChannelRole}>{channel.role}</span>
      </div>
      <p className={styles.contentChannelDesc}>{channel.description}</p>
      <div className={styles.contentChannelMeta}>
        <span>{channel.stat}</span>
        <a href={channel.url} target="_blank" rel="noreferrer">
          채널 방문 <i aria-hidden="true">↗</i>
        </a>
      </div>
      <ul className={styles.contentVideoList}>
        {channel.videos.map((video) => {
          const thumbnail = getYouTubeThumbnailUrl(video.url);
          return (
            <li key={video.url}>
              <a className={styles.contentVideoChip} href={video.url} target="_blank" rel="noreferrer">
                <span className={styles.contentVideoThumb}>
                  {thumbnail && <Image src={thumbnail} alt="" fill unoptimized sizes="64px" />}
                </span>
                <span className={styles.contentVideoInfo}>
                  <b>{video.format}</b>
                  <strong>{video.title}</strong>
                  {video.note && <small>{video.note}</small>}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
