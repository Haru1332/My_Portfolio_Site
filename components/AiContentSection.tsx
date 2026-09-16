"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Channel, ContentVideo } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";
import { VideoDialog, type VideoDialogHandle } from "@/components/VideoDialog";
import styles from "@/app/page.module.css";

type AiContentSectionProps = {
  id: string;
  index: string;
  channels: Channel[];
};

export function AiContentSection({ id, index, channels }: AiContentSectionProps) {
  const dialogRef = useRef<VideoDialogHandle>(null);

  return (
    <section className={styles.channelsSection} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>{index}</span> AI Content Channels</p>
          <h2 id={`${id}-title`}>AI 콘텐츠 채널 운영</h2>
          <p className={styles.caseStudySectionNote}>
            기획부터 AI 생성, 편집, 채널 운영까지 직접 진행한 개인 채널입니다. 채널마다 AI를 활용한 범위가 달라 그대로
            표기했으며, 회사 업무와는 무관합니다.
          </p>
        </div>
      </header>

      <div className={styles.channelGrid}>
        {channels.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} onPlay={(title, url) => dialogRef.current?.open(title, url)} />
        ))}
      </div>

      <VideoDialog ref={dialogRef} />
    </section>
  );
}

function ChannelCard({ channel, onPlay }: { channel: Channel; onPlay: (title: string, url: string) => void }) {
  return (
    <article className={styles.channelCard} data-channel={channel.id}>
      <div className={styles.channelHead}>
        <a
          className={styles.channelAvatar}
          href={channel.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${channel.name} 채널 방문`}
        >
          <Image src={assetPath(channel.avatar)} alt={`${channel.name} 채널 로고`} fill sizes="56px" />
        </a>
        <div className={styles.channelHeadText}>
          <span className={styles.channelLang}>{channel.language}</span>
          {channel.since && <span className={styles.channelLang}>{channel.since}~</span>}
          <h3>{channel.name}</h3>
          <span className={styles.channelRole}>{channel.role}</span>
        </div>
      </div>
      <p className={styles.channelAiScope}>{channel.aiScope}</p>
      <p className={styles.channelDesc}>{channel.description}</p>
      <div className={styles.channelMeta}>
        <span>{channel.stat}</span>
        <a href={channel.url} target="_blank" rel="noreferrer">
          채널 방문 <i aria-hidden="true">↗</i>
        </a>
      </div>

      {channel.mediaLayout === "chips" && <ChipMedia videos={channel.videos} onPlay={onPlay} />}
    </article>
  );
}

function ChipMedia({ videos, onPlay }: { videos: ContentVideo[]; onPlay: (title: string, url: string) => void }) {
  return (
    <ul className={styles.contentVideoList}>
      {videos.map((video) => {
        const thumbnail = getYouTubeThumbnailUrl(video.url);
        return (
          <li key={video.url}>
            <button type="button" className={styles.contentVideoChip} onClick={() => onPlay(video.title, video.url)}>
              <span className={styles.contentVideoThumb}>
                {thumbnail && <Image src={thumbnail} alt="" fill unoptimized sizes="64px" />}
                <span className={styles.contentVideoPlay} aria-hidden="true">▶</span>
              </span>
              <span className={styles.contentVideoInfo}>
                <b>{video.format}</b>
                <strong>{video.title}</strong>
                {video.note && <small>{video.note}</small>}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
