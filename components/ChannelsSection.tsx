"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Album, Channel, ContentVideo } from "@/content/portfolio";
import { assetPath } from "@/lib/asset-path";
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from "@/lib/youtube";
import styles from "@/app/page.module.css";

const MARQUEE_SECONDS_PER_ITEM = 2.6;

type ActiveVideo = { title: string; url: string };

type ChannelsSectionProps = {
  id: string;
  index: string;
  channels: Channel[];
};

export function ChannelsSection({ id, index, channels }: ChannelsSectionProps) {
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setActiveVideo(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  function playVideo(title: string, url: string) {
    setActiveVideo({ title, url });
    window.requestAnimationFrame(() => dialogRef.current?.showModal());
  }

  const embedUrl = activeVideo ? getYouTubeEmbedUrl(activeVideo.url) : null;

  return (
    <section className={styles.channelsSection} id={id} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <div>
          <p className={styles.kicker}><span>{index}</span> Channels</p>
          <h2 id={`${id}-title`}>직접 운영한 유튜브 채널</h2>
          <p className={styles.caseStudySectionNote}>
            기획부터 제작, 채널 운영까지 직접 진행한 개인 채널입니다. 채널마다 AI를 활용한 범위가 달라 각 카드에 그대로
            표기했으며, 회사 업무와는 무관합니다.
          </p>
        </div>
      </header>

      <div className={styles.channelGrid}>
        {channels.map((channel) => <ChannelCard key={channel.id} channel={channel} onPlay={playVideo} />)}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.channelVideoDialog}
        aria-label={activeVideo?.title ?? "영상 재생"}
        onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
      >
        <button className={styles.dialogClose} type="button" onClick={() => dialogRef.current?.close()} aria-label="닫기">
          닫기 <span>×</span>
        </button>
        <div className={styles.channelVideoFrame}>
          {embedUrl && (
            <iframe
              src={embedUrl}
              title={activeVideo?.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
        {activeVideo && <p className={styles.channelVideoTitle}>{activeVideo.title}</p>}
      </dialog>
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

      {channel.mediaLayout === "chips" ? (
        <ChipMedia videos={channel.videos} onPlay={onPlay} />
      ) : (
        <MarqueeMedia albums={channel.albums} onPlay={onPlay} />
      )}
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

function MarqueeMedia({ albums, onPlay }: { albums: Album[]; onPlay: (title: string, url: string) => void }) {
  const marqueeAlbums = [...albums, ...albums];
  const duration = `${(albums.length * MARQUEE_SECONDS_PER_ITEM).toFixed(1)}s`;

  return (
    <div className={styles.compositionAlbums}>
      <div className={styles.compositionAlbumsTrack} style={{ "--marquee-duration": duration } as React.CSSProperties}>
        {marqueeAlbums.map((album, index) => {
          const isDuplicate = index >= albums.length;
          return (
            <button
              key={`${album.cover}-${index}`}
              type="button"
              className={styles.compositionAlbumCover}
              onClick={album.url ? () => onPlay(album.title, album.url!) : undefined}
              disabled={!album.url}
              aria-label={album.url ? `${album.title} 재생` : album.title}
              aria-hidden={isDuplicate || undefined}
              tabIndex={isDuplicate ? -1 : undefined}
            >
              <Image src={assetPath(album.cover)} alt="" fill sizes="140px" loading="eager" />
              <em>{album.title}</em>
              {album.url && <span className={styles.contentVideoPlay} aria-hidden="true">▶</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
